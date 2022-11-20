import React, {createContext, FC, PropsWithChildren, useContext} from 'react';
import {Instance, types} from 'mobx-state-tree';
import {AuthenticationStoreModel, createAuthenticationStoreDefaultModel} from './authentication-store';
import {LoadingComponent} from '@/components';

export const rootStore = types
  .model({
    authenticationStore: AuthenticationStoreModel,
  })
  .create({
    authenticationStore: createAuthenticationStoreDefaultModel(),
  });

const RootStoreContext = createContext<null | Instance<typeof rootStore>>(null);
export const StoreProvider: FC<PropsWithChildren> = ({children}) => {
  return (
    <RootStoreContext.Provider value={rootStore}>
      {rootStore ? children : <LoadingComponent />}
    </RootStoreContext.Provider>
  );
};

export function useStores() {
  const store = useContext(RootStoreContext);
  if (store === null) {
    throw new Error('Store cannot be null, please add a context provider');
  }
  return store;
}

export const useAuthStore = () => useStores().authenticationStore;
