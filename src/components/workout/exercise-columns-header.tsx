import React, {FC} from 'react';
import {View, StyleSheet} from 'react-native';
import {Text} from 'react-native-paper';

const ExerciseColumnsHeaderComponent: FC = () => {
  return (
    <View style={[styles.row]}>
      <Text variant="labelLarge" style={[styles.header, styles.smallHeader]} allowFontScaling={false}>
        Set
      </Text>
      <Text variant="labelLarge" style={[styles.header, styles.bigHeader]} allowFontScaling={false}>
        Goal
      </Text>
      <Text variant="labelLarge" style={[styles.header, styles.bigHeader]} allowFontScaling={false}>
        Weight (kg)
      </Text>
      <Text variant="labelLarge" style={[styles.header, styles.bigHeader]} allowFontScaling={false}>
        Reps
      </Text>
      <View style={[styles.smallHeader]} />
    </View>
  );
};

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  header: {textTransform: 'uppercase'},
  bigHeader: {
    flex: 1.5,
    marginHorizontal: 4,
    textAlign: 'center',
  },
  smallHeader: {
    flex: 0.8,
    textAlign: 'center',
  },
});

export {ExerciseColumnsHeaderComponent};
