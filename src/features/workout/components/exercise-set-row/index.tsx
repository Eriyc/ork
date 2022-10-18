import React, {memo, useCallback} from 'react';
import {StyleSheet, SectionListRenderItemInfo, Pressable} from 'react-native';
import {Swipeable} from 'react-native-gesture-handler';

import {DeleteSetButton} from './delete-set-button';

import {useRenderTracker} from '../../hooks/use-rerender-count';
import {ExerciseSetData, WorkoutData} from '../../store/types';
import {workoutStyles} from '../styles';
import {WorkoutSetRow} from './set-type';
import {WorkoutPreviousSetStats} from './previous-set-button';
import {WorkoutTextInput} from '../workout-text-input';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {useTheme} from '@/features/ui';
import {Theme} from '@react-navigation/native';
import {toggleExercise, updateSet} from '../../store';

const ExerciseSetRow = memo<
  SectionListRenderItemInfo<ExerciseSetData, WorkoutData> & {
    setNumber: number;
  }
>(
  ({item, section, setNumber}) => {
    useRenderTracker(item.id);
    const theme = useTheme();

    const styles = createStyles(theme);

    const toggle = useCallback(() => {
      toggleExercise(section.id, item.id);
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const setPrevious = () => {
      updateSet(section.id, item.id, item.previous);
    };

    return (
      <Swipeable
        childrenContainerStyle={[workoutStyles.row]}
        renderRightActions={() => (
          <DeleteSetButton exerciseId={section.id} setId={item.id} />
        )}>
        <WorkoutSetRow type={item.type} number={setNumber} />
        <WorkoutPreviousSetStats
          handlePrevious={setPrevious}
          previous={item.previous}
        />
        <WorkoutTextInput
          style={[workoutStyles.column]}
          placeholder={item.weight.placeholder}
          value={item.weight.value}
        />
        <WorkoutTextInput
          style={[workoutStyles.column]}
          placeholder={item.reps.placeholder}
          value={item.reps.value}
        />
        <Pressable
          onPress={toggle}
          style={[workoutStyles.halfColumn, styles.button]}>
          <Icon name="check" color={theme.colors.text} size={24} />
        </Pressable>
      </Swipeable>
    );
  },
  (prev, next) =>
    prev.setNumber === next.setNumber &&
    prev.item.reps === next.item.reps &&
    prev.item.weight === next.item.weight &&
    prev.item.completed === next.item.completed,
);

const createStyles = (theme: Theme) =>
  StyleSheet.create({
    container: {},
    button: {
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: theme.colors.border,
      borderRadius: 4,
      padding: 4,
    },
  });

export {ExerciseSetRow};
