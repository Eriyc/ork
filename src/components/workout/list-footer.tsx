import React, {FC} from 'react';
import {useMainNavigation} from '@/navigation';
import {Button, useTheme} from 'react-native-paper';
import {StyleSheet} from 'react-native';
import {useWorkoutStore} from '@/models';

const WorkoutListFooterComponent: FC = () => {
  const navigation = useMainNavigation();
  const theme = useTheme();

  const workout = useWorkoutStore();

  const handleCancel = () => {
    // double check

    workout.cancel();
  };

  return (
    <>
      <Button
        style={[styles.button]}
        mode="contained-tonal"
        onPress={() =>
          navigation.navigate('exercisePicker', {
            returnTo: 'templates',
          })
        }>
        Add exercise
      </Button>
      {workout.active && ( // is workout active
        <Button onPress={handleCancel} style={[styles.button]} textColor={theme.colors.error}>
          cancel workout
        </Button>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  button: {
    marginHorizontal: 16,
    marginBottom: 32,
  },
});

export {WorkoutListFooterComponent};
