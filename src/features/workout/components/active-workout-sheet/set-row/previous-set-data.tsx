import {Text} from '@/features/ui';
import {WeightUnit} from '@/features/workout/store';
import React, {FC} from 'react';
import {View, StyleSheet, Pressable} from 'react-native';
import {workoutStyles} from '../styles';

type Props = {
  previous: {weight: number; reps: number};
  unit: WeightUnit;
  onSetPrevious: () => void;
};

const PreviousSetData: FC<Props> = ({previous, unit}) => {
  return (
    <View style={[workoutStyles.previousColumm]}>
      <Pressable style={[styles.button]}>
        <Text maxFontSizeMultiplier={1.7}>
          {previous.reps} × {previous.weight} {unit}
        </Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  button: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
});

export {PreviousSetData};
