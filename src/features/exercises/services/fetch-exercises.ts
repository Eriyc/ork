import client from '@/utils/client';
import {storage} from '@/utils/storage';
import {ExerciseInfo} from '../types';

export const getExercisesLocally = () => {
  const exercises = storage.getItem('@Exercises');
  return exercises ? JSON.parse(exercises) : [];
};
export const fetchExercises = async (): Promise<ExerciseInfo[]> => {
  const {data, error} = await client.from('exercises').select('*');

  if (error) {
    return getExercisesLocally();
  } else {
    storage.setItem('@Exercises', JSON.stringify(data));
    return data;
  }
};
