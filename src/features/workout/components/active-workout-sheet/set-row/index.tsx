import React, {FC} from 'react';
import {StyleSheet, Pressable, SectionListRenderItemInfo} from 'react-native';
import {Swipeable} from 'react-native-gesture-handler';

import {Text, useTheme} from '@/features/ui';
import {ExerciseData, WorkoutData} from '@/features/workout/store';

import {CompleteSetButton} from './complete-set-button';
import {PreviousSetData} from './previous-set-data';
import {SetRepInput} from './set-rep-input';
import {SetWeightInput} from './set-weight-input';
import {WorkoutTypeSelect} from './workout-type-select';

import {workoutStyles} from '../styles';

const DeleteButton = () => {
  return (
    <Pressable style={[styles.deleteButton]}>
      <Text>Remove set</Text>
    </Pressable>
  );
};

type Props = {
  data: SectionListRenderItemInfo<ExerciseData, WorkoutData>;
};

const SetRow: FC<Props> = ({data}) => {
  const {item} = data;
  const onSwipeableOpen = () => {};
  const {colors} = useTheme();

  const backgroundColor = colors.card;

  const handleSetPrevious = () => {};

  return (
    <Swipeable
      childrenContainerStyle={[workoutStyles.row, {backgroundColor}]}
      containerStyle={[styles.row]}
      onSwipeableOpen={onSwipeableOpen}
      renderRightActions={DeleteButton}>
      <WorkoutTypeSelect />
      <PreviousSetData
        previous={item.previous}
        unit={data.section.weightUnit}
        onSetPrevious={handleSetPrevious}
      />
      <SetWeightInput />
      <SetRepInput />
      <CompleteSetButton />
    </Swipeable>
  );
};

const styles = StyleSheet.create({
  row: {
    backgroundColor: 'red',
    marginBottom: 8,
    padding: 0,
  },
  deleteButton: {
    flexDirection: 'row',
    padding: 8,
    paddingHorizontal: 32,
    borderTopRightRadius: 4,
    borderBottomRightRadius: 4,
  },
});

export {SetRow};
