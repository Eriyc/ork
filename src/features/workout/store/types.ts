import {StateCreator} from 'zustand';

type RequireAtLeastOne<T> = {
  [K in keyof T]-?: Required<Pick<T, K>> &
    Partial<Pick<T, Exclude<keyof T, K>>>;
}[keyof T];

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

type UpdateSetValues = {weight?: number; reps?: number; rpe?: number};
type UpdateSetProps = RequireAtLeastOne<UpdateSetValues>;

export type ExerciseData = {
  type: 'default' | 'bodyweight';
  previous: {weight: number; reps: number};
  rpe?: number;
  weight: {isPlaceholder: boolean; value?: number};
  reps: {isPlaceholder: boolean; value?: number};
};

export type WeightUnit = 'kg' | 'lbs';
export type WorkoutData = {
  id: string;
  weightType: 'normal';
  weightUnit: WeightUnit;

  data: ExerciseData[];
};
export type ExercisesSlice = {
  exercises: Record<string, WorkoutData>;

  addSet: (exerciseId: number) => void;
  removeSet: (exerciseId: number, index: number) => void;
  updateSet: (exerciseId: number, index: number, data: UpdateSetProps) => void;
};

type SliceMap = {
  TimerSlice: TimerSlice;
  StatusSlice: StatusSlice;
  ExercisesSlice: ExercisesSlice;
};
export type AllSlices = TimerSlice & StatusSlice & ExercisesSlice;

export type WorkoutSlice<T extends keyof SliceMap> = StateCreator<
  AllSlices,
  [],
  [],
  SliceMap[T]
>;
