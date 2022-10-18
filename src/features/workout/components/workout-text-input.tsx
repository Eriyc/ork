import React, {FC, useEffect, useState} from 'react';
import {StyleProp, StyleSheet, TextInput, View, ViewStyle} from 'react-native';

type Props = {
  style?: StyleProp<ViewStyle>;
  value?: string | number;
  placeholder?: number;
};
const WorkoutTextInput: FC<Props> = ({style, placeholder, value}) => {
  const [state, setState] = useState(() =>
    value ? value.toString() : undefined,
  );

  useEffect(() => {
    setState(value?.toString());
  }, [value]);

  const updateField = (text: string) => {
    setState(text.replace(/[^0-9]/g, ''));
  };

  return (
    <View style={[styles.container, style]}>
      <TextInput
        value={state}
        onChangeText={updateField}
        style={[styles.field]}
        placeholder={placeholder ? placeholder.toString() : undefined}
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
