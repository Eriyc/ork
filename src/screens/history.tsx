import client from '@/utils/client';
import React, {FC, useEffect, useState} from 'react';
import {View, StyleSheet} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import {Surface, Text} from 'react-native-paper';

type Workout = {
  id: string;
  creator_id: string;
  audience: string;
  published_at: string;
};

const HistoryScreen: FC = () => {
  const [workouts, setWorkouts] = useState<Workout[]>([]);

  const fetchWorkout = async () => {
    const {data} = await client.from('workouts').select('*');

    setWorkouts(data ?? []);
  };

  useEffect(() => {
    fetchWorkout();
  }, []);

  return (
    <View style={[styles.container]}>
      <FlatList
        data={workouts}
        renderItem={({item}) => (
          <Surface key={item.id}>
            <Text>{item.creator_id}</Text>
          </Surface>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
});

export {HistoryScreen};
