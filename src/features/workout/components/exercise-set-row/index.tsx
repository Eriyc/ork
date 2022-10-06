import React, {memo} from 'react';
import {StyleSheet, SectionListRenderItemInfo, View} from 'react-native';
import {Swipeable} from 'react-native-gesture-handler';

import {DeleteSetButton} from './delete-set-button';

import {useRenderTracker} from '../../hooks/use-rerender-count';
import {ExerciseSetData, WorkoutData} from '../../store/types';
import {workoutStyles} from '../styles';
import {WorkoutSetRow} from './set-type';
import {WorkoutPreviousSetStats} from './previous-set-button';
import {WorkoutTextInput} from '../workout-text-input';

const ExerciseSetRow = memo<
  SectionListRenderItemInfo<ExerciseSetData, WorkoutData> & {
    setNumber: number;
  }
>(
  ({item, section, setNumber}) => {
    useRenderTracker(item.id);

    return (
      <Swipeable
        childrenContainerStyle={[workoutStyles.row]}
        renderRightActions={() => (
          <DeleteSetButton exerciseId={section.id} setId={item.id} />
        )}>
        <WorkoutSetRow type={item.type} number={setNumber} />
        <WorkoutPreviousSetStats previous={item.previous} />
        <WorkoutTextInput
          style={[workoutStyles.column]}
          placeholder={item.weight.isPlaceholder}
          value={item.weight.value}
        />
        <WorkoutTextInput
          style={[workoutStyles.column]}
          placeholder={item.reps.isPlaceholder}
          value={item.reps.value}
        />
        <View style={[workoutStyles.halfColumn, styles.item]}>{}</View>
      </Swipeable>
    );
  },
  (prev, next) => prev.setNumber === next.setNumber,
);

const styles = StyleSheet.create({
  container: {},
  item: {
    height: 40,
    backgroundColor: 'red',
  },
});

export {ExerciseSetRow};
