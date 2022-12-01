import {types} from 'mobx-state-tree';
import {AuthenticationStoreModel} from './authentication-store';
import {WorkoutStoreModel} from './workout-store';

export const rootStoreModel = types.model({
  authenticationStore: AuthenticationStoreModel,
  workoutStore: WorkoutStoreModel,
});
