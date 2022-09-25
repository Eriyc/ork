import client from '@/utils/client';
import {storage} from '@/utils/storage';
import {ExerciseInfo} from '../types';

export const getExerciseLocally = (exerciseId: number) => {
  const exercise = storage.getItem(`@Exercises/${exerciseId}`);
  return exercise ? JSON.parse(exercise) : null;
};
export const fetchExercise = async (
  exerciseId: number,
): Promise<ExerciseInfo | null> => {
  const {data, error} = await client
    .from('exercises')
    .select('*')
    .eq('id', exerciseId)
    .single();

  if (error) {
    return getExerciseLocally(exerciseId);
  } else {
    storage.setItem(`@Exercises/${exerciseId}`, JSON.stringify(data));
    return data;
  }
};
