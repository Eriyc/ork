import React, {FC, PropsWithChildren} from 'react';
import {View, StyleSheet} from 'react-native';
import {useWorkoutSheet} from './sheet-provider';
import BottomSheet from '@gorhom/bottom-sheet';
import {ActiveWorkoutSheetHandle} from './handle';

const ActiveWorkoutSheet: FC<PropsWithChildren> = ({}) => {
  const {ref, onChange, snapPoints, currentPosition} = useWorkoutSheet();

  return (
    <BottomSheet
      handleComponent={ActiveWorkoutSheetHandle}
      handleHeight={0}
      onChange={onChange}
      snapPoints={snapPoints}
      index={-1}
      animatedPosition={currentPosition}
      ref={ref}>
      <View style={[styles.container]} />
    </BottomSheet>
  );
};
const styles = StyleSheet.create({
  container: {},
});

export {ActiveWorkoutSheet};
export {SheetProvider, useWorkoutSheet} from './sheet-provider';
