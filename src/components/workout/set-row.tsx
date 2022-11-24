import React, {FC, useMemo} from 'react';
import {StyleSheet, Pressable} from 'react-native';
import {Swipeable} from 'react-native-gesture-handler';
import {MD3Colors, MD3Theme, Surface, Text, TextInput, TouchableRipple, useTheme} from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {Set} from '@/models/workout-store/set';
import {observer} from 'mobx-react-lite';

type SetRowProps = {
  set: Set;
  index: number;
};

const RemoveButton = () => {
  const theme = useTheme();
  const styles = useMemo(() => createStyles(theme), [theme]);

  return (
    <TouchableRipple style={styles.removeButton}>
      <Text style={styles.removeText}>Remove</Text>
    </TouchableRipple>
  );
};
const renderRightActions = () => <RemoveButton />;

const WorkoutSetRow: FC<SetRowProps> = observer(({set, index}) => {
  const theme = useTheme();
  const styles = useMemo(() => createStyles(theme), [theme]);

  const handleCompletePress = () => {
    set.setCompleted(!set.completed);
  };

  const handleSwipe = (dir: 'left' | 'right') => {
    if (dir === 'right') {
      set.remove();
    }
  };

  return (
    <Swipeable renderRightActions={renderRightActions} onSwipeableOpen={handleSwipe}>
      <Surface style={[styles.row, index % 2 === 1 && styles.evenRow, set.completed && styles.done]} elevation={0}>
        <TouchableRipple style={[styles.button]}>
          <Text>{set.label}</Text>
        </TouchableRipple>
        <TouchableRipple style={[styles.textInput]}>
          <Text allowFontScaling={false} style={[styles.center]}>
            -
          </Text>
        </TouchableRipple>
        <TextInput
          style={[styles.textInput, set.completed && styles.done]}
          contextMenuHidden
          keyboardType="decimal-pad"
          onChangeText={text => set.updateWeight(text)}
          value={set.weight ? set.weight.toString() : ''}
        />
        <TextInput
          style={[styles.textInput, set.completed && styles.done]}
          contextMenuHidden
          keyboardType="number-pad"
          onChangeText={text => set.updateReps(parseInt(text, 10))}
          value={set.reps ? set.reps.toString() : ''}
        />
        <Pressable style={[styles.button]} onPress={handleCompletePress}>
          <Icon name="check" color={theme.colors.onBackground} size={24} />
        </Pressable>
      </Surface>
    </Swipeable>
  );
});

const createStyles = (theme: MD3Theme) =>
  StyleSheet.create({
    container: {},
    row: {
      display: 'flex',
      flexDirection: 'row',
      padding: 8,
      backgroundColor: theme.colors.surface,
      elevation: 0,
    },
    evenRow: {
      backgroundColor: theme.colors.elevation.level1,
    },
    removeButton: {
      backgroundColor: theme.colors.error,
      flex: 1,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'flex-end',
      paddingHorizontal: 8,
    },
    removeText: {
      color: theme.colors.onError,
    },
    textInput: {
      flex: 2,
      marginHorizontal: 4,
      justifyContent: 'center',
      textAlign: 'auto',
    },
    small: {
      flex: 1,
    },
    button: {
      flex: 0.8,
      justifyContent: 'center',
      alignItems: 'center',
    },
    center: {
      textAlign: 'center',
    },
    done: {backgroundColor: MD3Colors.tertiary60},
  });

export {WorkoutSetRow};
