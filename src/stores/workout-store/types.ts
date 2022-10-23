import {Exercise} from '@/data';
import {StateCreator} from 'zustand';

export type WeightUnit = 'kg' | 'lbs';
export type DistanceUnit = 'm' | 'ft' | 'km' | 'mi';

export type WorkoutSection = {
  id: string;
  unit: WeightUnit | DistanceUnit;
  exerciseId: Exercise['id'];
  /* Sets */
  data: Set[];
};

export type Set = {
  weight: number;
};

export type TimerSlice = {
  times: Date[];
  workoutStatus: 'paused' | 'working' | 'ended';

  startTime: () => Date;
  toggleTimer: () => void;
  endWorkout: () => void;
};

export type SetSlice = {
  sections: WorkoutSection[];
  addSection: (exerciseId: Exercise['id']) => Promise<void>;
  removeSection: (setId: WorkoutSection['id']) => void;
};

type SliceMap = {
  TimerSlice: TimerSlice;
  SetSlice: SetSlice;
};
export type AllSlices = TimerSlice & SetSlice;

export type Middleware = [
  ['zustand/persist', unknown],
  ['zustand/immer', never],
  ['zustand/devtools', never],
];

export type WorkoutState<T extends keyof SliceMap> = StateCreator<
  AllSlices,
  Middleware,
  [],
  SliceMap[T]
>;
