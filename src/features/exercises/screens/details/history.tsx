import {Loading} from '@/features/app';
import React, {FC} from 'react';
import {ScrollView} from 'react-native';
import {useExercise} from '../../actions';
import {LatestExerciseResults} from '../../components';

const ExerciseHistoryScreen: FC = () => {
  const {data, loading} = useExercise();

  if (loading) {
    return <Loading />;
  }

  return (
    <ScrollView>
      <LatestExerciseResults exerciseId={data!.id} />
    </ScrollView>
  );
};

export {ExerciseHistoryScreen};
