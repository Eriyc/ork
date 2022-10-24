import {Workout} from '@/stores';
import React, {FC} from 'react';
import {View, StyleSheet} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import {useMMKVObject} from 'react-native-mmkv';
import {Surface, Text} from 'react-native-paper';

const HistoryScreen: FC = () => {
  const [workouts] = useMMKVObject<Workout[]>('workouts');

  console.log(workouts);

  return (
    <View style={[styles.container]}>
      <FlatList
        data={workouts ?? []}
        renderItem={({item}) => (
          <Surface>
            <Text>{item.title}</Text>
            <Text>{item.sections.length} exercises</Text>
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
