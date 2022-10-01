import React, {FC} from 'react';
import {FlatList} from 'react-native';
import {useExercises} from '../hooks';
import {ExerciseRow} from '../components';

const ExerciseLibraryScreen: FC = () => {
  const {data: exercises} = useExercises();

  return (
    <FlatList
      data={exercises}
      renderItem={props => <ExerciseRow {...props.item} />}
    />
  );
};

export {ExerciseLibraryScreen};
