import React, {FC, useEffect, useState} from 'react';
import {View} from 'react-native';

import client from '@/utils/client';
import {useAuth} from '@/features/context';
import {Card, Text} from '@/features/ui';

import {groupSets} from '../utils/group-sets';
import {compileSetSummary} from '../utils/compile-set-summary';
import {CompiledWorkout, Workout} from '../types';
import {calculateTotalVolume} from '../utils/calculate-volume';

const WorkoutHistoryScreen: FC = () => {
  const [history, setHistory] = useState<CompiledWorkout[]>([]);
  const {authData} = useAuth();

  const fetchHistory = async () => {
    const {data} = await client
      .from('workouts')
      .select('id, name, sets(*, exercise:exercise_id(name))');

    const workouts = (data as Workout[]) ?? [];
    const workoutsWithData: CompiledWorkout[] = workouts.map(workout => ({
      ...workout,
      setOverview: compileSetSummary(groupSets(workout.sets)),
      volume: calculateTotalVolume(workout.sets),
    }));

    setHistory(workoutsWithData);
  };

  useEffect(() => {
    fetchHistory();
  }, [authData?.id]);

  return (
    <View>
      {history.map(workout => (
        <Card key={workout.id}>
          <Text>{workout.name}</Text>
          <Text>volume: {workout.volume} kg</Text>
          <Text>Exercise</Text>
          {Object.values(workout.setOverview).map(set => (
            <View key={set.exercise_id}>
              <Text>{set.label}</Text>
            </View>
          ))}
        </Card>
      ))}
    </View>
  );
};

export {WorkoutHistoryScreen};
