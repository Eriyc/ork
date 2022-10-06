import {StyleSheet, ViewStyle} from 'react-native';

const colBase: ViewStyle = {
  flex: 2,
  justifyContent: 'center',
  alignItems: 'stretch',
};

export const workoutStyles = StyleSheet.create({
  column: {
    ...colBase,
    paddingHorizontal: 4,
  },
  halfColumn: {
    ...colBase,
    flex: 1,
  },
  previousColumm: {
    ...colBase,
    flex: 3,
    alignItems: 'center',
  },
  row: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 4,
  },
  textInput: {
    flex: 1,
    borderRadius: 4,
    backgroundColor: 'gray',
    paddingVertical: 8,
    paddingHorizontal: 8,
    textAlign: 'center',
  },
});
