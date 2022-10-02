import {StateCreator} from 'zustand';

export type TimerSlice = {
  startTime: Date | null;
  endTime: Date | null;

  startTimer: () => void;
  endTimer: () => void;
};

export type StatusSlice = {
  status: 'active' | 'inactive';

  startWorkout: () => void;
  endWorkout: () => void;
};

type SliceMap = {
  TimerSlice: TimerSlice;
  StatusSlice: StatusSlice;
};
export type AllSlices = TimerSlice & StatusSlice;

export type WorkoutSlice<T extends keyof SliceMap> = StateCreator<
  AllSlices,
  [],
  [],
  SliceMap[T]
>;
