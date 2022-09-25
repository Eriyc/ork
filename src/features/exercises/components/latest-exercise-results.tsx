import React, {FC} from 'react';
import {View} from 'react-native';
import {nanoid} from 'nanoid';
import {Card, Text} from '@/features/ui';

const LatestExerciseResults: FC<{exerciseId: number}> = ({exerciseId}) => {
  const exerciseData = [{reps: 8, weigth: 50, unit: 'kg', id: nanoid()}];

  return (
    <View>
      {exerciseData.map(data => (
        <Card key={data.id}>
          <Text>{data.reps}</Text>
        </Card>
      ))}
    </View>
  );
};

export {LatestExerciseResults};
