import React, {FC, PropsWithChildren, useMemo} from 'react';
import {StyleSheet, SectionList} from 'react-native';
import {useWorkoutSheet} from './sheet-provider';
import BottomSheet from '@gorhom/bottom-sheet';
import {ActiveWorkoutSheetHandle} from './handle';

import {SafeAreaView} from 'react-native-safe-area-context';
import {SetRow} from './set-row';
import {useWorkoutStore, WorkoutData, ExerciseData} from '../../store';
import {ExerciseHeader} from './exercise-header';
import {WorkoutHeader} from './workout-header';
import {useTimer} from '../../hooks';

const ActiveWorkoutSheet: FC<PropsWithChildren> = ({}) => {
  const {ref, onChange, snapPoints, currentPosition} = useWorkoutSheet();
  const workout = useWorkoutStore();

  const timer = useTimer(workout.startTime);

  const sections = useMemo(
    () =>
      Object.entries(workout.exercises).map(([id, exercise]) => ({
        id,
        weightUnit: exercise.weightUnit,
        weightType: exercise.weightType,

        data: exercise.data,
      })),
    [workout.exercises],
  );

  return (
    <>
      <BottomSheet
        handleComponent={a => <ActiveWorkoutSheetHandle timer={timer} {...a} />}
        handleHeight={0}
        onChange={onChange}
        snapPoints={snapPoints}
        index={-1}
        animatedPosition={currentPosition}
        ref={ref}>
        <SafeAreaView style={[styles.col]} edges={['right', 'left']}>
          <SectionList<ExerciseData, WorkoutData>
            stickySectionHeadersEnabled={false}
            contentContainerStyle={[styles.container]}
            renderSectionHeader={({section}) => (
              <ExerciseHeader section={section} />
            )}
            renderItem={data => <SetRow data={data} />}
            sections={sections}
            ListHeaderComponent={<WorkoutHeader timer={timer} />}
          />
        </SafeAreaView>
      </BottomSheet>
    </>
  );
};
const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  exercise: {
    marginTop: 16,
  },
  set: {},
  setHeaderLabel: {
    flex: 1,
  },

  col: {
    flex: 1,
  },
});

export {ActiveWorkoutSheet};
export {SheetProvider, useWorkoutSheet} from './sheet-provider';
