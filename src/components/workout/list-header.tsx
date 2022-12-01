import React, {FC} from 'react';
import {View, StyleSheet} from 'react-native';
import {Text} from 'react-native-paper';

const WorkoutListHeaderComponent: FC = () => {
  return (
    <View style={[styles.container]}>
      <Text style={[styles.text]}>Workout title</Text>
      <Text>10:03</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginLeft: 8,
    paddingVertical: 16,
  },
  text: {
    fontWeight: '700',
    fontSize: 16,
  },
});

export {WorkoutListHeaderComponent};
