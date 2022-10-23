import {exercises} from '@/data';
import {Set, WorkoutSection} from '@/stores';
import React, {FC, useMemo} from 'react';
import {View, StyleSheet, SectionListData} from 'react-native';
import {Text} from 'react-native-paper';

type SetRowProps = {
  section: SectionListData<Set, WorkoutSection>;
};

const WorkoutExerciseHeader: FC<SetRowProps> = ({section}) => {
  const exercise = useMemo(
    () => exercises.find(e => e.id === section.exerciseId),
    [section.exerciseId],
  )!;

  return (
    <View style={[styles.container]}>
      <Text>exercise: {exercise.title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
});

const renderExerciseHeader = ({section}: SetRowProps) => (
  <WorkoutExerciseHeader section={section} />
);

export {WorkoutExerciseHeader, renderExerciseHeader};
