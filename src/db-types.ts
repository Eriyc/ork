export type WorkoutSectionSet = {
  id: string;
  section_id: string;
  weight: number | null;
  reps: number | null;
  rpe: number | null;
};

export type WorkoutSection = {
  id: string;
  workout_id: string;
};

export type Workout = {
  id: string;
  audience: string;
  creator_id: string;
  started_at: string;
  finished_at: string;
};
