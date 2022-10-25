import {SavedSet, SavedWorkout, SavedWorkoutSection} from '@/stores';
import React, {FC, useMemo} from 'react';
import {View, StyleSheet} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import {useMMKVObject} from 'react-native-mmkv';
import {Surface, Text} from 'react-native-paper';

const HistoryScreen: FC = () => {
  const [workouts] = useMMKVObject<SavedWorkout[]>('user_id#workouts');
  const [sections] = useMMKVObject<SavedWorkoutSection[]>('user_id#sections');
  const [sets] = useMMKVObject<SavedSet[]>('user_id#sets');

  const fullSections = useMemo(
    () =>
      sections?.map(section => ({
        ...section,
        data: sets?.filter(set => set.sectionId === section.id) || [],
      })) || [],
    [sets, sections],
  );

  const fullWorkouts = useMemo(
    () =>
      workouts?.map(workout => ({
        ...workout,
        sections:
          fullSections.filter(section => section.workoutId === workout.id) || 0,
      })) || [],
    [workouts, fullSections],
  );

  return (
    <View style={[styles.container]}>
      <FlatList
        data={fullWorkouts}
        renderItem={({item}) => (
          <Surface key={item.id}>
            <Text>{item.title}</Text>
            {item.sections.map(section => (
              <View key={section.id}>
                <Text>
                  {section.data.length} x {section.exerciseId} - {8}x
                  {section.data[section.data.length - 1].weight.value}
                  {section.unit}
                </Text>
              </View>
            ))}
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
