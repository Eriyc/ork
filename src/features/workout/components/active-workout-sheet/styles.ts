import {StyleSheet} from 'react-native';

export const workoutStyles = StyleSheet.create({
  setColumn: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  column: {
    flex: 2,
    justifyContent: 'center',
    paddingHorizontal: 4,
    alignItems: 'center',
    flexDirection: 'row',
  },
  previousColumm: {
    justifyContent: 'center',
    flex: 3,
    alignItems: 'center',
  },
  row: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
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
