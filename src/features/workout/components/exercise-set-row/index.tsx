import {Text} from '@/features/ui';
import React, {memo} from 'react';
import {StyleSheet, SectionListRenderItemInfo} from 'react-native';
import {useRenderTracker} from '../../hooks/use-rerender-count';
import {WorkoutData} from '../../store/types';

const ExerciseSetRow = memo<SectionListRenderItemInfo<string, WorkoutData>>(
  ({item}) => {
    useRenderTracker(item);

    return <Text>{item}</Text>;
  },
  ({item: prev}, {item: next}) => prev === next,
);

const styles = StyleSheet.create({
  container: {},
});

export {ExerciseSetRow};
