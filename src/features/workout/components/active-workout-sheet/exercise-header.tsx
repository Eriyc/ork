import {Text} from '@/features/ui';
import React, {FC} from 'react';
import {View, StyleSheet, SectionListData} from 'react-native';
import {ExerciseData, WorkoutData} from '../../store';
import {workoutStyles} from './styles';

type Props = {
  section: SectionListData<ExerciseData, WorkoutData>;
};
const ExerciseHeader: FC<Props> = ({section}) => {
  return (
    <View style={[styles.container]}>
      <View style={[workoutStyles.row]}>
        <Text style={[styles.headerLabel, workoutStyles.halfColumn]}>Set</Text>
        <Text style={[workoutStyles.previousColumm, styles.headerLabel]}>
          Previous
        </Text>
        <Text style={[workoutStyles.column, styles.headerLabel]}>
          Weight ({section.weightUnit})
        </Text>
        <Text style={[workoutStyles.column, styles.headerLabel]}>Reps</Text>
        <View style={[workoutStyles.halfColumn]} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
  headerLabel: {
    textTransform: 'uppercase',
    fontSize: 10,
    textAlign: 'center',
  },
});

export {ExerciseHeader};
