import client from '@/utils/client';
import {storage} from '@/utils/storage';
import React, {createContext, FC, PropsWithChildren, useState} from 'react';
import {useEffect} from 'react';
import {useContext} from 'react';
import {AuthContextData, AuthData, authService} from '../auth';

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

const AuthProvider: FC<PropsWithChildren> = ({children}) => {
  const [authData, setAuthData] = useState<AuthData>();

  //The loading part will be explained in the persist step session
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const {data} = client.auth.onAuthStateChange(async (event, session) => {
      if (
        event === 'TOKEN_REFRESHED' ||
        event === 'SIGNED_IN' ||
        event === 'USER_UPDATED'
      ) {
        const user = session!.user;
        const profile = await authService.fetchUserData(user?.id);

        if (!profile) {
          return setAuthData(undefined);
        }

        const _authData: AuthData = {
          email: user.email!,
          id: user.id,
          ...profile,

          success: true,
        };

        storage.setItem('@AuthData', JSON.stringify(_authData));
        setAuthData(_authData);
      } else if (event === 'USER_DELETED' || event === 'SIGNED_OUT') {
        setAuthData(undefined);
      }
    });

    return () => data.subscription.unsubscribe();
  }, []);

  useEffect(() => {
    loadStorageData();
  }, []);

  const loadStorageData = async () => {
    try {
      const data = storage.getItem('@AuthData');
      if (data) {
        const _authData = JSON.parse(data);
        setAuthData(_authData);
      }
    } catch (error) {
    } finally {
      setLoading(false);
    }
  };

  const signIn = async () => {
    //call the service passing credential (email and password).
    //In a real App this data will be provided by the user from some InputText components.

    const _authData = await authService.signInWithEmailAndPassword(
      'ericdahlgren03+test@gmail.com',
      'testpass',
    );

    //Set the data in the context, so the App can be notified
    //and send the user to the AuthStack
    setAuthData(_authData.success ? _authData : undefined);
    storage.setItem('@AuthData', JSON.stringify(_authData));
    setLoading(false);
  };

  const signInWithProvider = async (provider: 'google' | 'apple') => {
    authService.signInWithProvider({provider});
  };

  const signOut = async () => {
    //Remove data from context, so the App can be notified
    //and send the user to the AuthStack
    authService.signOut();
    storage.removeItem('@AuthData');
    setAuthData(undefined);
  };

  const deleteOwnAccount = async () => {
    authService.deleteAccount();
    signOut();
  };

  return (
    //This component will be used to encapsulate the whole App,
    //so all components will have access to the Context
    <AuthContext.Provider
      value={{
        authData,
        loading,
        signIn,
        signOut,
        signInWithProvider,
        deleteOwnAccount,
      }}>
      {children}
    </AuthContext.Provider>
  );
};

export {AuthProvider};
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used in a child of AuthContext');
  }
  return context;
};
