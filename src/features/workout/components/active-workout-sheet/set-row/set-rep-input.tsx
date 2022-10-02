import React, {FC} from 'react';
import {View, StyleSheet, TextInput} from 'react-native';
import {workoutStyles} from '../styles';

const SetRepInput: FC = () => {
  return (
    <View style={[workoutStyles.column]}>
      <TextInput
        textBreakStrategy="simple"
        keyboardType="number-pad"
        contextMenuHidden
        placeholder="0"
        maxFontSizeMultiplier={1.7}
        style={[workoutStyles.textInput]}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 2,
  },
});

export {SetRepInput};
