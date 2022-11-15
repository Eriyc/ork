import {Set, useWorkout, WorkoutSection} from '@/stores';
import React, {FC, memo, useMemo, useState} from 'react';
import {StyleSheet, SectionListRenderItem, Pressable} from 'react-native';
import {Swipeable} from 'react-native-gesture-handler';
import {
  MD3Colors,
  MD3Theme,
  Surface,
  Text,
  TextInput,
  TouchableRipple,
  useTheme,
} from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

type SetRowProps = {
  set: Set;
  index: number;
  sectionId: WorkoutSection['id'];
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

const useFieldValue = (
  initialValue?: number | string,
): [string, (text: string) => void] => {
  const [value, setValue] = useState(() =>
    initialValue ? initialValue.toString() : '',
  );

  const handleChange = (text: string) => {
    // remove everything but numbers and ".", followed by decimals
    const replaced = text.replace(',', '.');
    const onlyNumbers = /^\d*\.?\d*$/;

    if (onlyNumbers.test(replaced)) {
      setValue(replaced);
    }
  };

  return [value, handleChange];
};

const WorkoutSetRow: FC<SetRowProps> = memo(
  ({set, index, sectionId}) => {
    const theme = useTheme();
    const styles = useMemo(() => createStyles(theme), [theme]);

    const [weight, setWeight] = useFieldValue(set.weight.value);
    const [reps, setReps] = useFieldValue(set.reps.value);

    const [done, setDone] = useState(false);

    const removeSet = useWorkout(state => state.removeSet);

    const handleSwipe = (dir: 'left' | 'right') => {
      if (dir === 'right') {
        removeSet(sectionId, set.id);
      }
    };

    return (
      <Swipeable
        renderRightActions={renderRightActions}
        onSwipeableOpen={handleSwipe}>
        <Surface
          style={[
            styles.row,
            index % 2 === 1 && styles.evenRow,
            done && styles.done,
          ]}
          elevation={0}>
          <TouchableRipple style={[styles.button]}>
            <Text>{index + 1}</Text>
          </TouchableRipple>
          <TouchableRipple style={[styles.textInput]}>
            <Text allowFontScaling={false} style={[styles.center]}>
              10 x 40kg
            </Text>
          </TouchableRipple>
          <TextInput
            style={[styles.textInput, done && styles.done]}
            value={weight ? weight.toString() : ''}
            placeholder={set.weight.placeholder?.toString()}
            onChangeText={setWeight}
            contextMenuHidden
            keyboardType="decimal-pad"
          />
          <TextInput
            style={[styles.textInput, done && styles.done]}
            value={reps ? reps.toString() : ''}
            placeholder={set.reps.placeholder?.toString()}
            onChangeText={setReps}
            contextMenuHidden
            keyboardType="number-pad"
          />
          <Pressable style={[styles.button]} onPress={() => setDone(d => !d)}>
            <Icon name="check" color={theme.colors.onBackground} size={24} />
          </Pressable>
        </Surface>
      </Swipeable>
    );
  },
  (prev, next) => prev.index === next.index && prev.set.id === next.set.id,
);

const createStyles = (theme: MD3Theme) =>
  StyleSheet.create({
    container: {},
    row: {
      display: 'flex',
      flexDirection: 'row',
      marginHorizontal: 4,
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
      textAlign: 'center',
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

const renderSetRow: SectionListRenderItem<Set, WorkoutSection> = ({
  item,
  index,
  section,
}) => <WorkoutSetRow set={item} index={index} sectionId={section.id} />;

export {WorkoutSetRow, renderSetRow};
