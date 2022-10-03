import {Text} from '@/features/ui';
import React, {FC} from 'react';
import {View, StyleSheet} from 'react-native';

const WorkoutHeader: FC<{timer: string}> = ({timer}) => {
  return (
    <View style={[styles.container]}>
      <Text>Afternoon Workout</Text>
      <Text>{timer}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
});

export {WorkoutHeader};
