import React, { FC } from 'react';
import { FlatList } from 'react-native';
import { ExerciseWithMuscles } from '@/queries/exercises';

import { renderExercise } from '../molecules/exercise-list-row';

type ExerciseListProps = {
  exercises: ExerciseWithMuscles[];
};

const ExerciseListComponent: FC<ExerciseListProps> = ({ exercises }) => {
  return <FlatList data={exercises} renderItem={renderExercise} />;
};

export { ExerciseListComponent };
