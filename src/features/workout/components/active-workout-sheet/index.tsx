import React, {FC, PropsWithChildren} from 'react';
import {View, StyleSheet, ScrollView} from 'react-native';
import {useWorkoutSheet} from './sheet-provider';
import BottomSheet from '@gorhom/bottom-sheet';
import {ActiveWorkoutSheetHandle} from './handle';
import {Text} from '@/features/ui';

import {workoutStyles} from './styles';
import {SafeAreaView} from 'react-native-safe-area-context';
import {SetRow} from './set-row';

const ActiveWorkoutSheet: FC<PropsWithChildren> = ({}) => {
  const {ref, onChange, snapPoints, currentPosition} = useWorkoutSheet();

  return (
    <>
      <BottomSheet
        handleComponent={ActiveWorkoutSheetHandle}
        handleHeight={0}
        onChange={onChange}
        snapPoints={snapPoints}
        index={-1}
        animatedPosition={currentPosition}
        ref={ref}>
        <SafeAreaView style={[styles.col]} edges={['right', 'left']}>
          <ScrollView contentContainerStyle={[styles.container]}>
            <Text>Afternoon Workout</Text>
            <Text>10:00</Text>

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
