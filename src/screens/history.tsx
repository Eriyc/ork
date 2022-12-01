import {HistoryCardComponent, ListSeparatorComponent} from '@/components';
import {useAuthStore} from '@/models';
import {FetchWorkoutData} from '@/models/workout-store';
import client from '@/utils/client';
import React, {FC, useEffect, useState} from 'react';
import {StyleSheet} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';

type WorkoutList = FetchWorkoutData[];

const HistoryScreen: FC = () => {
  const [workouts, setWorkouts] = useState<WorkoutList>([]);
  const {user} = useAuthStore();

  const fetchWorkout = async () => {
    const {data} = await client
      .from('workouts')
      .select('*, creator:creator_id(displayname, avatar), sections:workout_sections(*, exercise:exercise_id(name))')
      .eq('creator_id', user?.id)
      .order('started_at', {ascending: false});

    setWorkouts(data ?? []);
  };

  useEffect(() => {
    fetchWorkout();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user?.id]);

  return (
    <FlatList
      contentContainerStyle={[styles.container]}
      data={workouts}
      renderItem={({item}) => <HistoryCardComponent workout={item} />}
      ItemSeparatorComponent={ListSeparatorComponent}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 16,
    paddingHorizontal: 8,
  },
  card: {
    padding: 8,
  },
});

export {HistoryScreen};
