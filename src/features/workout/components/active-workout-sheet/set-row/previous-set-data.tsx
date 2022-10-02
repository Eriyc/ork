import {Text} from '@/features/ui';
import React, {FC} from 'react';
import {View, StyleSheet, Pressable} from 'react-native';
import {workoutStyles} from '../styles';

const PreviousSetData: FC = () => {
  return (
    <View style={[workoutStyles.previousColumm]}>
      <Pressable style={[styles.button]}>
        <Text maxFontSizeMultiplier={1.7}>10 × 0 kg</Text>
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
