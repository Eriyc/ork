import {Text} from '@/features/ui';
import React, {FC} from 'react';
import {View, StyleSheet, Pressable} from 'react-native';
import {ExerciseSetData} from '../../store/types';
import {workoutStyles} from '../styles';

type Props = {
  type: ExerciseSetData['type'];
  number: number;
};

const WorkoutSetRow: FC<Props> = ({number, type}) => {
  const label = type === 'default' ? number : type[0];

  return (
    <View style={[workoutStyles.halfColumn]}>
      <Pressable
        style={({pressed}) => [styles.button, pressed && styles.pressed]}>
        <Text style={[styles.text]}>{label}</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  pressed: {
    backgroundColor: '#f4f4f4',
  },
  text: {
    fontWeight: '700',
  },
});

export {WorkoutSetRow};
