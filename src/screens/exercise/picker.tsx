import {exercises} from '@/data';
import {useWorkoutStore} from '@/models';
import {useMainNavigation, useMainRoute} from '@/navigation';
import React, {FC} from 'react';
import {View, StyleSheet} from 'react-native';
import {Button} from 'react-native-paper';

const WorkoutExercisePickerScreen: FC = () => {
  const navigation = useMainNavigation();
  const {
    params: {returnTo},
  } = useMainRoute<'exercisePicker'>();
  const {addSection} = useWorkoutStore();

  const goBack = () => {
    navigation.navigate(returnTo as any);
  };

  const onSelect = (id: number) => {
    addSection(id);
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
