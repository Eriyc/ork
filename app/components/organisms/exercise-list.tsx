import React, { FC } from 'react';
import { FlatList } from 'react-native';
import { Exercise } from '@/queries/exercises';

import { renderExercise } from '../molecules/exercise-list-row';

type ExerciseListProps = {
  exercises: Exercise[];
};

const ExerciseListComponent: FC<ExerciseListProps> = ({ exercises }) => {
  return <FlatList data={exercises} renderItem={renderExercise} />;
};

export { ExerciseListComponent };
