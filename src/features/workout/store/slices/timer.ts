import {useTimer} from '../../hooks';
import {WorkoutSlice} from '../types';

export const createTimerSlice: WorkoutSlice<'TimerSlice'> = set => ({
  startTime: null,
  endTime: null,
  startTimer: () => {
    const s = new Date();
    useTimer.getState().setStartTime(s);
    set({startTime: s});
  },
  endTimer: () => {
    useTimer.getState().endTimer();
    set({startTime: new Date()});
  },
});
