import {useEffect, useMemo, useState} from 'react';
import {exerciseService} from '../services';
import {ExerciseInfo} from '../types';

export const useExercises = () => {
  const [exercises, setExercises] = useState<ExerciseInfo[]>(() =>
    exerciseService.getExercisesLocally(),
  );

  const memoed = useMemo(() => exercises, [exercises]);

  useEffect(() => {
    exerciseService.fetchExercises().then(setExercises);
  }, []);

  return {exercises: memoed};
};
