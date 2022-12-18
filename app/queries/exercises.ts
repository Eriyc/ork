import { supabase } from '@/services/supabase-client';

export type Muscle = {
  id: number;
  name: string;
  heads: string[];
  aliases: string[];
  musclegroup: string;
};

export type ExerciseMuscleConnection = {
  muscle: Muscle;
  role: 'target' | 'synergist';
  heads: string[];
};

export type ExerciseWithMuscles = Exercise & {
  muscles: {
    role: ExerciseMuscleConnection['role'];
    name: Muscle['name'];
    id: Muscle['id'];
    heads: ExerciseMuscleConnection['heads'];
    musclegroup: string;
  }[];
};

export type Exercise = {
  id: number;
  label: string;
  description?: string;
};

export const getExercises = async (): Promise<ExerciseWithMuscles[]> => {
  try {
    const { data, error } = await supabase.rpc('get_exercises');
    if (error) throw new Error(`Error ${error.code}: ${error.message}`);
    if (data !== null) {
      return data as ExerciseWithMuscles[];
    }
    return [];
  } catch (error) {
    console.error(error);
    return [];
  }
};
