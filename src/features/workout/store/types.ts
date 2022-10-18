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

type UpdateSetValues = {
  weight?: {value?: number; placeholder?: number};
  reps?: {value?: number; placeholder?: number};
  rpe?: number;
  type: SetTypes;
};
type UpdateSetProps = RequireAtLeastOne<UpdateSetValues>;

export type SetTypes = 'default' | 'warmup' | 'drop' | 'failure';
export type WeightUnit = 'kg' | 'lbs';
export type WeightType = 'normal' | 'bodyweight' | 'assisted';
export type ExerciseSetData = {
  id: string;
  type: SetTypes;
  previous: {weight: number; reps: number; unit: WeightUnit};
  rpe?: number;
  weight: {value?: number; placeholder?: number};
  reps: {value?: number; placeholder?: number};
  completed: boolean;
};

export type WorkoutData = {
  id: string;
  weightType: WeightType;
  weightUnit: WeightUnit;

  data: ExerciseSetData[];
};
export type ExercisesSlice = {
  exercises: WorkoutData[];
  addSet(id: string): void;
  updateSet(
    exerciseId: string,
    setId: string,
    data: UpdateSetProps,
    placeholder?: boolean,
  ): void;
  removeSet(exerciseId: string, setId: string): void;
  removeExercise(exerciseId: string): void;

  toggleExercise: (exerciseId: string, setId: string) => void;
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
