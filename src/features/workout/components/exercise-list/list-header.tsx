import {Text} from '@/features/ui';
import React, {FC} from 'react';
import {View, StyleSheet} from 'react-native';
import {useTimer} from '../../hooks';

const WorkoutHeader: FC = () => {
  const timer = useTimer(s => s.time);

  return (
    <View style={[styles.container]}>
      <Text testID="workout-name">Afternoon Workout</Text>
      <Text>{timer}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
});

export {WorkoutHeader};
