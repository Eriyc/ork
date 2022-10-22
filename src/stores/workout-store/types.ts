import {Exercise} from '@/data';
import {StateCreator} from 'zustand';

export type WorkoutSection = {
  id: string;
  exerciseId: Exercise['id'];
};

export type Set = {
  sectionId: WorkoutSection['id'];
};

export type TimerSlice = {
  startTime: Date | null;
  endTime: Date | null;

  startTimer: () => void;
  endTimer: () => void;
};

type SliceMap = {
  TimerSlice: TimerSlice;
};
export type AllSlices = TimerSlice;

export type Middleware = [['zustand/immer', never]];

export type WorkoutState<T extends keyof SliceMap> = StateCreator<
  AllSlices,
  Middleware,
  [],
  SliceMap[T]
>;
