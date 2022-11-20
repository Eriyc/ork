import React, {createContext, FC, PropsWithChildren, useContext, useEffect, useState} from 'react';
import {Instance, types} from 'mobx-state-tree';
import {AuthenticationStoreModel, createAuthenticationStoreDefaultModel} from './authentication-store';
import {LoadingComponent} from '@/components';

export const rootStore = types.model({
  authenticationStore: AuthenticationStoreModel,
});

const RootStoreContext = createContext<null | Instance<typeof rootStore>>(null);
export const StoreProvider: FC<PropsWithChildren> = ({children}) => {
  const [store, setStore] = useState<Instance<typeof rootStore> | null>(null);

  useEffect(() => {
    setStore(
      rootStore.create({
        authenticationStore: createAuthenticationStoreDefaultModel(),
      }),
    );
  }, []);

  return <RootStoreContext.Provider value={store}>{store ? children : <LoadingComponent />}</RootStoreContext.Provider>;
};

export function useStores() {
  const store = useContext(RootStoreContext);
  if (store === null) {
    throw new Error('Store cannot be null, please add a context provider');
  }
  return store;
}

export const useAuthStore = () => useStores().authenticationStore;
