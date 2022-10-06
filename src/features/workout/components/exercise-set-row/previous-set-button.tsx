import {Text} from '@/features/ui';
import React, {FC} from 'react';
import {View, StyleSheet, Pressable} from 'react-native';
import {ExerciseSetData} from '../../store/types';
import {workoutStyles} from '../styles';

type Props = {
  previous: ExerciseSetData['previous'];
};
const WorkoutPreviousSetStats: FC<Props> = ({previous}) => {
  const handlePress = () => {};

  return (
    <View style={[styles.container, workoutStyles.previousColumm]}>
      <Pressable
        onPress={handlePress}
        style={({pressed}) => [styles.button, pressed && styles.pressed]}>
        <Text>
          {previous.reps} × {previous.weight} {previous.unit}
        </Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
  button: {
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    paddingHorizontal: 8,
  },
  pressed: {
    backgroundColor: '#f4f4f4',
  },
});

export {WorkoutPreviousSetStats};
