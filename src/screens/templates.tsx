import {WorkoutTimer} from '@/components';
import {useWorkout} from '@/stores';
import React, {FC} from 'react';
import {View, StyleSheet} from 'react-native';
import {Button, Text} from 'react-native-paper';

const TemplatesScreen: FC = () => {
  const workout = useWorkout();

  return (
    <View style={[styles.container]}>
      <Button mode="contained-tonal">Start an empty workout</Button>
      <View>
        <Text>timer ({workout.workoutStatus})</Text>
        <WorkoutTimer />
        <View style={[styles.row]}>
          <Button mode="contained" onPress={workout.toggleTimer}>
            Toggle timer
          </Button>
          <Button
            mode="contained-tonal"
            onPress={workout.endWorkout}
            disabled={workout.workoutStatus !== 'working'}>
            End timer
          </Button>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
  row: {
    flexDirection: 'row',
  },
});

export {TemplatesScreen};
