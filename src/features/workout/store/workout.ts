import create from 'zustand';
import {createStatusSlice} from './slices/status';
import {createTimerSlice} from './slices/timer';
import {AllSlices} from './types';

export const useWorkoutStore = create<AllSlices>()((...a) => ({
  ...createTimerSlice(...a),
  ...createStatusSlice(...a),
}));
