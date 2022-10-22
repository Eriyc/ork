import create from 'zustand';
import {immer} from 'zustand/middleware/immer';
import {timerSlice} from './slices/timer';
import {AllSlices, Middleware} from './types';

export const useWorkout = create<AllSlices, Middleware>(
  immer((...a) => ({
    ...timerSlice(...a),
  })),
);

export * from './types';
