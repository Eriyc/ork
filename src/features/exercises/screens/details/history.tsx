import {Loading} from '@/features/app';
import React, {FC} from 'react';
import {ScrollView} from 'react-native';
import {useExercise} from '../../hooks';
import {LatestExerciseResults} from '../../components';

const ExerciseHistoryScreen: FC = () => {
  const {data, isLoading} = useExercise();

  if (isLoading) {
    return <Loading />;
  }

  return (
    <ScrollView>
      <LatestExerciseResults exerciseId={data!.id} />
    </ScrollView>
  );
};

export {ExerciseHistoryScreen};
