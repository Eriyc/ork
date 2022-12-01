export type WorkoutSectionSet = {
  weight: number | null;
  reps: number | null;
  rpe: number | null;
};

export type WorkoutSection = {
  index: number;
  workout_id: string;
  exercise_id: string;
  sets: WorkoutSectionSet[];
};

export type Workout = {
  id: string;
  audience: string;
  creator_id: string;
  started_at: string;
  finished_at: string;
};

export enum WeightType {
  KG = 'kg',
  LBS = 'lbs',
}
