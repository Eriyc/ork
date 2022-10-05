import React, {FC} from 'react';
import {useWorkoutSheet} from './sheet-provider';
import BottomSheet from '@gorhom/bottom-sheet';
import {ActiveWorkoutSheetHandle} from './handle';

import {ExerciseList} from '../exercise-list';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useRenderTracker} from '../../hooks/use-rerender-count';

const ActiveWorkoutSheet: FC = () => {
  const {ref, onChange, snapPoints, currentPosition, ready} = useWorkoutSheet();

  useRenderTracker('bottom-sheet');

  return (
    <>
      <BottomSheet
        handleComponent={a => <ActiveWorkoutSheetHandle {...a} />}
        handleHeight={0}
        onChange={onChange}
        snapPoints={snapPoints}
        index={-1}
        animatedPosition={currentPosition}
        ref={ref}>
        {ready && (
          <SafeAreaView style={flex} edges={['right', 'left']}>
            <ExerciseList />
          </SafeAreaView>
        )}
      </BottomSheet>
    </>
  );
};

const flex = {flex: 1};

export {ActiveWorkoutSheet};
export {SheetProvider, useWorkoutSheet} from './sheet-provider';
