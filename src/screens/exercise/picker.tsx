import {exercises} from '@/data';
import {useMainNavigation, useMainRoute} from '@/navigation';
import {useWorkout} from '@/stores';
import React, {FC} from 'react';
import {View, StyleSheet} from 'react-native';
import {Button} from 'react-native-paper';

const WorkoutExercisePickerScreen: FC = () => {
  const navigation = useMainNavigation();
  const {
    params: {returnTo},
  } = useMainRoute<'exercisePicker'>();
  const addExercise = useWorkout(state => state.addSection);

  const goBack = () => {
    navigation.navigate(returnTo as any);
  };

  const onSelect = (id: number) => {
    addExercise(id);
    goBack();
  };

  return (
    <View style={[styles.container]}>
      {exercises.map(exercise => (
        <Button key={exercise.id} onPress={() => onSelect(exercise.id)}>
          {exercise.title}
        </Button>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
});

export {WorkoutExercisePickerScreen};
