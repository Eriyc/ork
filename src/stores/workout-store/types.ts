import {Exercise} from '@/data';
import {StateCreator} from 'zustand';

export type WeightUnit = 'kg' | 'lbs';
export type DistanceUnit = 'm' | 'ft' | 'km' | 'mi';
export type SetType = 'normal' | 'drop' | 'warmup' | 'failure';
export type WeightType = 'value' | 'plates';

export type WorkoutSection = {
  id: string;
  unit: WeightUnit | DistanceUnit;
  exerciseId: Exercise['id'];
  /* Sets */
  data: Set[];
};

export type SavedWorkoutSection = Omit<WorkoutSection, 'data'> & {
  workoutId: string;
};

export type Set = {
  id: string;
  weight?: number;
  reps?: number;
};
export type SavedSet = Set & {sectionId: string};

export type Workout = {
  sections: WorkoutSection[];
  times: string[];
  title: string;
};
export type SavedWorkout = Omit<Workout, 'sections'> & {id: string};

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
  addSetToSection: (sectionId: WorkoutSection['id'], index: number, type: SetType) => void;
  removeSection: (sectionId: WorkoutSection['id']) => void;
  removeSet: (sectionId: WorkoutSection['id'], setIndex: Set['id']) => void;

  updateSet: (sectionId: string, setId: string, data: {weight: number; reps: number}) => void;
};

type SliceMap = {
  TimerSlice: TimerSlice;
  SetSlice: SetSlice;
};
export type AllSlices = TimerSlice & SetSlice;

export type Middleware = [['zustand/persist', unknown], ['zustand/immer', never], ['zustand/devtools', never]];

export type WorkoutState<T extends keyof SliceMap> = StateCreator<AllSlices, Middleware, [], SliceMap[T]>;
