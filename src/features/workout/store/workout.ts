import create from 'zustand';
import {createExercisesSlice} from './slices/exercises';
import {createStatusSlice} from './slices/status';
import {createTimerSlice} from './slices/timer';
import {AllSlices} from './types';

export const useWorkoutStore = create<AllSlices>()((...a) => ({
  ...createTimerSlice(...a),
  ...createStatusSlice(...a),
  ...createExercisesSlice(...a),
}));

export const updateSet = useWorkoutStore.getState().updateSet;
export const toggleExercise = useWorkoutStore.getState().toggleExercise;
