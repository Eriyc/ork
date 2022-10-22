import create from 'zustand';
import {immer} from 'zustand/middleware/immer';
import {AllSlices, Middleware, WorkoutState} from './types';

const timerSlice: WorkoutState<'TimerSlice'> = set => ({
  endTime: null,
  endTimer: () => set(state => (state.endTime = new Date())),
  startTime: null,
  startTimer: () => set(state => (state.startTime = new Date())),
});

export const useWorkout = create<AllSlices, Middleware>(
  immer((...a) => ({
    ...timerSlice(...a),
  })),
);

export * from './types';
