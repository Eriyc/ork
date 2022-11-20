import {HistoryCardComponent} from '@/components';
import {Workout, WorkoutSection, WorkoutSectionSet} from '@/db-types';
import {useAuthStore} from '@/models';
import client from '@/utils/client';
import React, {FC, useEffect, useState} from 'react';
import {StyleSheet} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';

type WorkoutList = (Workout & {
  sections: (WorkoutSection & {
    sets: WorkoutSectionSet[];
  })[];
  creator: {
    displayname: string;
  };
})[];

const HistoryScreen: FC = () => {
  const [workouts, setWorkouts] = useState<WorkoutList>([]);
  const {user} = useAuthStore();

  const fetchWorkout = async () => {
    const {data} = await client
      .from('workouts')
      .select('*, creator:creator_id(displayname, avatar), sections:workout_sections(sets:workout_section_sets(*))')
      .eq('creator_id', user?.id);

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
