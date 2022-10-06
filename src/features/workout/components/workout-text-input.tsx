import React, {FC} from 'react';
import {StyleProp, StyleSheet, TextInput, View, ViewStyle} from 'react-native';

type Props = {
  style?: StyleProp<ViewStyle>;
  value?: string | number;
  placeholder?: boolean;
};
const WorkoutTextInput: FC<Props> = ({style, placeholder, value}) => {
  return (
    <View style={[styles.container, style]}>
      <TextInput
        style={[styles.field]}
        placeholder={placeholder ? value?.toString() : undefined}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  field: {
    flex: 1,
    backgroundColor: '#f4f4f4',
    textAlign: 'center',
    borderRadius: 4,
  },
  container: {
    paddingHorizontal: 2,
    flex: 1,
  },
});

export {WorkoutTextInput};
