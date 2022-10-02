import React, {
  FC,
  PropsWithChildren,
  useEffect,
  useMemo,
  useState,
} from 'react';
import {View, StyleSheet, ScrollView} from 'react-native';
import {useWorkoutSheet} from './sheet-provider';
import BottomSheet from '@gorhom/bottom-sheet';
import {ActiveWorkoutSheetHandle} from './handle';
import {Text} from '@/features/ui';

import {workoutStyles} from './styles';
import {SafeAreaView} from 'react-native-safe-area-context';
import {SetRow} from './set-row';
import {useWorkoutStore} from '../../store';
import {calcDiff} from '@/utils';

const ActiveWorkoutSheet: FC<PropsWithChildren> = ({}) => {
  const {ref, onChange, snapPoints, currentPosition} = useWorkoutSheet();
  const workout = useWorkoutStore();
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    if (!workout.startTime) {
      return;
    }

    const timeoutId = setTimeout(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearTimeout(timeoutId);
  }, [currentTime, workout.startTime]);

  const timer = useMemo(
    () => (workout.startTime ? calcDiff(currentTime, workout.startTime) : '0'),
    [currentTime, workout.startTime],
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
          <ScrollView contentContainerStyle={[styles.container]}>
            <Text>Afternoon Workout</Text>
            <Text>{timer}</Text>

            <View style={[styles.exercise]}>
              <Text>Pushups</Text>
              <View style={[styles.set]}>
                <View style={[workoutStyles.row]}>
                  <Text style={[styles.headerLabel, workoutStyles.setColumn]}>
                    Set
                  </Text>
                  <Text
                    style={[workoutStyles.previousColumm, styles.headerLabel]}>
                    Previous
                  </Text>
                  <Text style={[workoutStyles.column, styles.headerLabel]}>
                    Weight
                  </Text>
                  <Text style={[workoutStyles.column, styles.headerLabel]}>
                    Reps
                  </Text>
                  <View style={[workoutStyles.setColumn]} />
                </View>
                <View accessibilityLabel="Sets">
                  <SetRow />
                  <SetRow />
                </View>
              </View>
            </View>
          </ScrollView>
        </SafeAreaView>
      </BottomSheet>
    </>
  );
};
const styles = StyleSheet.create({
  headerLabel: {
    textTransform: 'uppercase',
    fontSize: 10,
    textAlign: 'center',
  },
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
