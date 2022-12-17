import { useExercises } from '@/contexts/exercise-context';
import { useMemo } from 'react';

export const useExercise = (id: number) => {
  const { exercises } = useExercises();

  const exercise = useMemo(
    () => exercises.find(e => e.id === id),
    [id, exercises],
  );

  return { exercise };
};
