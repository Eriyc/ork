import React, {
  createContext,
  FC,
  PropsWithChildren,
  useContext,
  useEffect,
  useState,
} from 'react';
import {exerciseService} from '../services';
import {ExerciseInfo} from '../types';

type ExerciseData = {
  data: ExerciseInfo | null;
  loading: boolean;
};
const ExerciseContext = createContext<ExerciseData>({} as ExerciseData);
export const ExerciseProvider: FC<PropsWithChildren<{id: number}>> = ({
  children,
  id,
}) => {
  const [exercise, setExercise] = useState<ExerciseInfo | null>(() =>
    exerciseService.getExerciseLocally(id),
  );
  const [loading, setLoading] = useState(() => exercise === null);

  useEffect(() => {
    exerciseService
      .fetchExercise(id)
      .then(setExercise)
      .then(() => setLoading(false));
  }, [id]);

  return (
    <ExerciseContext.Provider value={{data: exercise, loading}}>
      {children}
    </ExerciseContext.Provider>
  );
};

export const useExercise = () => {
  return useContext(ExerciseContext);
};
