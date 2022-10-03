import {Text} from '@/features/ui';
import React, {FC} from 'react';
import {View, StyleSheet} from 'react-native';
import {workoutStyles} from '../styles';

const WorkoutTypeSelect: FC = () => {
  return (
    <View style={[workoutStyles.halfColumn]}>
      <View style={[styles.typeDropdown]}>
        <Text style={[styles.setNumber]}>1</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  setNumber: {
    fontWeight: '700',
  },
  typeDropdown: {
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export {WorkoutTypeSelect};
