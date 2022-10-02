import React, {FC} from 'react';
import {View, StyleSheet} from 'react-native';
import {workoutStyles} from '../styles';
import {CompleteSetButton} from './complete-set-button';
import {PreviousSetData} from './previous-set-data';
import {SetRepInput} from './set-rep-input';
import {SetWeightInput} from './set-weight-input';
import {WorkoutTypeSelect} from './workout-type-select';

const SetRow: FC = () => {
  return (
    <View style={[workoutStyles.row]}>
      <WorkoutTypeSelect />
      <PreviousSetData />
      <SetWeightInput />
      <SetRepInput />
      <CompleteSetButton />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
});

export {SetRow};
