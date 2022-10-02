import {WorkoutSlice} from '../types';

export const createTimerSlice: WorkoutSlice<'TimerSlice'> = set => ({
  startTime: null,
  endTime: null,
  startTimer: () => set({startTime: new Date()}),
  endTimer: () => set({startTime: new Date()}),
});
