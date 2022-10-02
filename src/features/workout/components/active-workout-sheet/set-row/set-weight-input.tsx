import React, {FC} from 'react';
import {View, StyleSheet} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';
import {workoutStyles} from '../styles';

const SetWeightInput: FC = () => {
  return (
    <View style={[workoutStyles.column]}>
      <TextInput
        style={[workoutStyles.textInput]}
        contextMenuHidden
        keyboardType="number-pad"
        placeholder="0"
        maxFontSizeMultiplier={1.7}
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export {SetWeightInput};
