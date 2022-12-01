import {WeightType, WorkoutSectionSet} from '@/db-types';

export type FetchWorkoutSectionsData = {
  workout_id: string;
  index: number;
  weight_unit: WeightType;
  sets: WorkoutSectionSet[];
  exercise_id: number;

  // joined data
  exercise: {
    name: string;
  };
};

export type FetchWorkoutData = {
  id: string;
  creator_id: string;
  started_at: Date;
  finished_at: Date;
  audience: string;

  // joined data
  creator: {
    id: string;
    displayname: string;
    avatar?: string;
  };
  sections: FetchWorkoutSectionsData[];
};
