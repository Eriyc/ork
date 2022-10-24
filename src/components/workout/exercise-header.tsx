import {exercises} from '@/data';
import {Set, WorkoutSection} from '@/stores';
import React, {FC, useMemo} from 'react';
import {StyleSheet, SectionListData} from 'react-native';
import {Surface, Text} from 'react-native-paper';

type SetRowProps = {
  section: SectionListData<Set, WorkoutSection>;
};

const WorkoutExerciseHeader: FC<SetRowProps> = ({section}) => {
  const exercise = useMemo(
    () => exercises.find(e => e.id === section.exerciseId),
    [section.exerciseId],
  )!;

  return (
    <Surface style={[styles.container]}>
      <Text variant="titleSmall">{exercise.title}</Text>
    </Surface>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 4,
    padding: 8,
    borderTopLeftRadius: 4,
    borderTopRightRadius: 4,
  },
});

const renderExerciseHeader = ({section}: SetRowProps) => (
  <WorkoutExerciseHeader section={section} />
);

export {WorkoutExerciseHeader, renderExerciseHeader};
