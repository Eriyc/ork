import {WorkoutSectionList, WorkoutTimer} from '@/components';
import {useWorkout} from '@/stores';
import React, {FC} from 'react';
import {View, StyleSheet} from 'react-native';
import {Button, IconButton, Text} from 'react-native-paper';

const TemplatesScreen: FC = () => {
  const workout = useWorkout();

  return (
    <View style={[styles.container]}>
      <Button mode="contained-tonal">Start an empty workout</Button>
      <View>
        <Text>timer ({workout.workoutStatus})</Text>
        <WorkoutTimer />
        <View style={[styles.row]}>
          <IconButton
            icon={workout.workoutStatus !== 'working' ? 'play' : 'pause'}
            mode="contained"
            onPress={workout.toggleTimer}
          />
          <IconButton
            icon="stop"
            mode="contained-tonal"
            onPress={workout.endWorkout}
            disabled={workout.workoutStatus !== 'working'}
          />
        </View>
        <WorkoutSectionList />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  row: {
    flexDirection: 'row',
  },
});

export {TemplatesScreen};
