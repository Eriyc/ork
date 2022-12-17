import { supabase } from '@/services/supabase-client';

export type Muscle = {
  id: number;
  name: string;
  heads: string[];
  aliases: string[];
};

export type ExerciseMuscleConnection = {
  muscle: Muscle;
  role: 'target' | 'synergist';
  heads: string[];
};

export type Exercise = {
  id: number;
  label: string;
  description?: string;
  muscles: ExerciseMuscleConnection[];
};

export const getExercises = async (): Promise<Exercise[]> => {
  try {
    const { data, error } = await supabase.rpc('get_exercises');
    if (error) throw new Error(`Error ${error.code}: ${error.message}`);
    if (data !== null) {
      console.log(data[0]);
      return data as Exercise[];
    }
    return [];
  } catch (error) {
    console.error(error);
    return [];
  }
};
