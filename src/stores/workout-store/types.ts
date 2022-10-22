import {Exercise} from '@/data';
import {StateCreator} from 'zustand';

export type WeightUnit = 'kg' | 'lbs';
export type DistanceUnit = 'm' | 'ft' | 'km' | 'mi';

export type WorkoutSection = {
  id: string;
  exerciseId: Exercise['id'];
  unit: WeightUnit | DistanceUnit;
};

export type Set = {
  sectionId: WorkoutSection['id'];
};

export type TimerSlice = {
  times: Date[];
  workoutStatus: 'paused' | 'working' | 'ended';

  startTime: () => Date;

  toggleTimer: () => void;
  endWorkout: () => void;
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
