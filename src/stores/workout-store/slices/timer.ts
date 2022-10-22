import {WorkoutState} from '../types';

export const timerSlice: WorkoutState<'TimerSlice'> = (set, get) => ({
  times: [],
  workoutStatus: 'paused',

  startTime: () => get().times[0],

  endWorkout: () => {
    if (get().times.length % 2 === 1) {
      set(state => {
        state.workoutStatus = 'ended';
        state.times.push(new Date());
      });
    }
  },
  toggleTimer: () => {
    set(state => {
      state.times.push(new Date());

      state.workoutStatus = state.times.length % 2 === 0 ? 'paused' : 'working';
    });
  },
});
