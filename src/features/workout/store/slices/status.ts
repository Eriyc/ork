import {WorkoutSlice} from '../types';

export const createStatusSlice: WorkoutSlice<'StatusSlice'> = (set, get) => ({
  status: 'inactive',
  startWorkout: () => {
    get().startTimer();
    set({status: 'active'});
  },
  endWorkout: () => {
    get().endTimer();
    set({status: 'inactive'});
  },
});
