import React, {FC} from 'react';
import {FlatList} from 'react-native';
import {useExercises} from '../actions';
import {ExerciseRow} from '../components';

const ExerciseLibraryScreen: FC = () => {
  const {exercises} = useExercises();

  console.log(exercises);

  return (
    <FlatList
      data={exercises}
      renderItem={props => <ExerciseRow {...props.item} />}
    />
  );
};

export {ExerciseLibraryScreen};
