import {Text} from '@/features/ui';
import React, {FC, memo} from 'react';
import {View, StyleSheet, SectionListData} from 'react-native';
import {workoutStyles} from '../styles';

import {WorkoutData} from '../../store';
import {ExerciseSetData} from '../../store/types';

type Props = {
  section: SectionListData<ExerciseSetData, WorkoutData>;
};
const ExerciseHeader: FC<Props> = memo(
  ({section}) => {
    return (
      <View style={[styles.container]}>
        <Text>{section.id}</Text>
        <View style={[workoutStyles.row]}>
          <Text style={[styles.headerLabel, workoutStyles.halfColumn]}>
            Set
          </Text>
          <Text style={[workoutStyles.previousColumm, styles.headerLabel]}>
            Previous
          </Text>
          <Text style={[workoutStyles.column, styles.headerLabel]}>
            {section.weightUnit}:s
          </Text>
          <Text style={[workoutStyles.column, styles.headerLabel]}>Reps</Text>
          <View style={[workoutStyles.halfColumn]} />
        </View>
      </View>
    );
  },
  ({section: prev}, {section: next}) =>
    prev.weightType === next.weightType && prev.weightUnit === next.weightUnit,
);

const styles = StyleSheet.create({
  container: {},
  headerLabel: {
    textTransform: 'uppercase',
    fontSize: 10,
    textAlign: 'center',
  },
});

export {ExerciseHeader};
