import React, {createContext, FC, PropsWithChildren, useContext} from 'react';
import {Instance, types} from 'mobx-state-tree';
import {LoadingComponent} from '@/components';
import {AuthenticationStoreModel, createAuthenticationStoreDefaultModel} from './authentication-store';
import {createWorkoutStoreDefaultModel, WorkoutStoreModel} from './workout-store';
import {observer} from 'mobx-react-lite';

export const rootStore = types
  .model({
    authenticationStore: AuthenticationStoreModel,
    workoutStore: WorkoutStoreModel,
  })
  .create({
    authenticationStore: createAuthenticationStoreDefaultModel(),
    workoutStore: createWorkoutStoreDefaultModel(),
  });

const RootStoreContext = createContext<null | Instance<typeof rootStore>>(null);
export const StoreProvider: FC<PropsWithChildren> = observer(({children}) => {
  return (
    <RootStoreContext.Provider value={rootStore}>
      {rootStore ? children : <LoadingComponent />}
    </RootStoreContext.Provider>
  );
});

export function useStores() {
  const store = useContext(RootStoreContext);
  if (store === null) {
    throw new Error('Store cannot be null, please add a context provider');
  }
  return store;
}

export const useAuthStore = () => useStores().authenticationStore;
export const useWorkoutStore = () => useStores().workoutStore;
