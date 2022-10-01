import {useQuery} from '@tanstack/react-query';
import {fetchExercises} from '../services/fetch-exercises';

export const useExercises = () => {
  return useQuery(['exercises'], fetchExercises);
};
