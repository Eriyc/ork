import { supabase } from '@/services/supabase-client';

export type Exercise = {
  id: number;
  label: string;
  description?: string;
};

export const getExercises = async (): Promise<Exercise[]> => {
  try {
    const { data, error } = await supabase.from('exercises').select('*');
    if (error) throw new Error(`Error ${error.code}: ${error.message}`);
    if (data !== null) {
      return data as Exercise[];
    }
    return [];
  } catch (error) {
    return [];
  }
};
