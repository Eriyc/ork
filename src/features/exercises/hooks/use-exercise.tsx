import React, {createContext, FC, PropsWithChildren, useContext} from 'react';
import {exerciseService} from '../services';
import {ExerciseInfo} from '../types';
import {useQuery, UseQueryResult, useQueryClient} from '@tanstack/react-query';

type ExerciseData = UseQueryResult<ExerciseInfo | null, unknown>;

const ExerciseContext = createContext<ExerciseData>({} as ExerciseData);
export const ExerciseProvider: FC<PropsWithChildren<{id: number}>> = ({
  children,
  id,
}) => {
  const queryClient = useQueryClient();
  const query = useQuery(
    ['exercise', id],
    () => exerciseService.fetchExercise(id),
    {
      initialData: () =>
        queryClient
          .getQueryData<ExerciseInfo[]>(['exercises'])
          ?.find(e => e.id === id) ?? null,
    },
  );
  return (
    <ExerciseContext.Provider value={query}>
      {children}
    </ExerciseContext.Provider>
  );
};

export const useExercise = () => {
  return useContext(ExerciseContext);
};
