import React, {
  useState,
  createContext,
  useEffect,
  PropsWithChildren,
  useContext,
} from 'react';
import { supabase } from '@/services/supabase-client';
import { getUserProfile } from '@/queries/users';
import type { UserProfile } from '@/queries/users';
import { useSupabaseMutation } from '@/hooks/use-supabase-mutation';
import { FC } from 'react';
import { PostgrestError } from '@supabase/supabase-js';

type SupabaseResponse =
  | { data: object; error: null }
  | { data: null; error: PostgrestError };

interface AuthContextProps {
  currentUser: UserProfile | null;
  loading: boolean;
  registerWithEmailAndPassword: (
    email: string,
    password: string,
  ) => Promise<void>;
  loginWithEmailAndPassword: (email: string, password: string) => Promise<void>;
  updateCurrentUser: (
    fields: Partial<Omit<UserProfile, 'id' | 'email'>>,
  ) => Promise<SupabaseResponse>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextProps | undefined>(undefined);

export const AuthProvider: FC<PropsWithChildren> = ({ children }) => {
  const [currentUser, setCurrentUser] = useState<UserProfile | null>(null);
  const [loading, setLoading] = useState(true);
  const { execute } = useSupabaseMutation();

  useEffect(() => {
    (async () => {
      setUserInitialState();
    })();

    const { data: authListener } = supabase.auth.onAuthStateChange(
      async (_event, currentSession) => {
        if (currentSession && currentSession.user) {
          const user = await getUserProfile(currentSession.user.id);
          setCurrentUser(user);
        } else {
          setCurrentUser(null);
        }
        setLoading(false);
      },
    );
    return () => {
      authListener.subscription.unsubscribe();
    };
  }, []);

  const setUserInitialState = async () => {
    const {
      data: { user },
    } = await supabase.auth.getUser();
    if ((await supabase.auth.getSession()) && user !== null) {
      const profile = await getUserProfile(user.id);
      setCurrentUser(profile);
    } else {
      setCurrentUser(null);
    }
    setLoading(false);
  };

  const updateCurrentUser = async (
    fields: Partial<Omit<UserProfile, 'id' | 'email'>>,
  ): Promise<SupabaseResponse> => {
    const response = await execute(supabase.from('profiles').update(fields));
    const { error } = response as SupabaseResponse;

    if (!error) {
      setCurrentUser(prevUser =>
        prevUser ? { ...prevUser, ...fields } : null,
      );
    }

    return response as SupabaseResponse;
  };

  const registerWithEmailAndPassword = async (
    email: string,
    password: string,
  ) => {
    setLoading(true);
    const { error } = await execute(
      supabase.auth.signUp({
        email,
        password,
      }),
    );
    if (error) {
      setLoading(false);
    }
  };

  const loginWithEmailAndPassword = async (email: string, password: string) => {
    setLoading(true);
    const { error } = await execute(
      supabase.auth.signInWithPassword({
        email,
        password,
      }),
    );
    if (error) {
      setLoading(false);
    }
  };

  const logout = async () => {
    setLoading(true);
    const { error } = await execute(supabase.auth.signOut());
    if (error) {
      setLoading(false);
    }
  };

  return (
    <AuthContext.Provider
      value={{
        currentUser,
        loading,
        registerWithEmailAndPassword,
        loginWithEmailAndPassword,
        updateCurrentUser,
        logout,
      }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextProps => {
  const context = useContext(AuthContext);

  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }

  return context;
};

export const useCurrentUser = (): UserProfile => {
  const { currentUser } = useAuth();

  if (!currentUser) {
    throw new Error('useCurrentUser must be used in an authenticated screen');
  }

  return currentUser;
};
