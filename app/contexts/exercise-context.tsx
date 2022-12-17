import { useSupabaseMutation } from '@/hooks/use-supabase-mutation';
import {
  Exercise,
  ExerciseWithMuscles,
  getExercises,
} from '@/queries/exercises';
import { storage } from '@/services/storage';
import React, {
  createContext,
  FC,
  PropsWithChildren,
  useContext,
  useEffect,
  useState,
} from 'react';
import { useMMKVObject } from 'react-native-mmkv';

interface ExerciseContextProps {
  exercises: ExerciseWithMuscles[];
}

const ExerciseContext = createContext<ExerciseContextProps | undefined>(
  undefined,
);

const getExercisesFromCache = () => {
  console.info(storage.toJSON());
};

export const ExerciseProvider: FC<PropsWithChildren> = ({ children }) => {
  const [cache] = useMMKVObject<ExerciseWithMuscles[]>('exercises');
  const [exercises, setExercises] = useState<ExerciseWithMuscles[]>(
    cache ?? [],
  );

  const [loading, setLoading] = useState(true);

  const { execute, loading: fetching } = useSupabaseMutation();

  useEffect(() => {
    (async () => setExercisesInitialState())();
    getExercisesFromCache();
  }, []);

  const setExercisesInitialState = async () => {
    const online = true;
    if (online) {
      const data = await getExercises();
      setExercises(data);
      storage.set('exercises', JSON.stringify(data));
    }
    setLoading(false);
  };

  return (
    <ExerciseContext.Provider
      value={{
        exercises,
      }}>
      {children}
    </ExerciseContext.Provider>
  );
};

export const useExercises = () => {
  const context = useContext(ExerciseContext);

  if (context === undefined) {
    throw new Error('useExercises must be used within an ExerciseProvider');
  }

  return context;
};
