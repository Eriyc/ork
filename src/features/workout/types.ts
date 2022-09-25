export type Set = {
  id: number;
  repetitions: number;
  weigth: number;
  intensity: number | null;
  variant: 'default';
  exercise_id: number;
  exercise: {
    name: string;
  };
};

export type Workout = {
  name: string;
  id: number;
  sets: Set[];
};

export type CompiledWorkout = {
  name: string;
  sets: Set[];
  setOverview: {label: string; exercise_id: number}[];
  volume: number;
  id: number;
};
