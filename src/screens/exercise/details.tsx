import React, {FC} from 'react';
import {View, StyleSheet} from 'react-native';
import {Text} from 'react-native-paper';

const ExerciseDetailsScreen: FC = () => {
  return (
    <View style={[styles.container]}>
      <Text>Progression</Text>
      <Text>History</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
});

export {ExerciseDetailsScreen};
