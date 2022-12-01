import {useWorkoutStore} from '@/models';
import {observer} from 'mobx-react-lite';
import React, {FC} from 'react';
import {StyleSheet} from 'react-native';
import {Button} from 'react-native-paper';

const _FinishWorkoutButtonComponent: FC = () => {
  const workout = useWorkoutStore();

  return (
    <>
      {workout.active && (
        <Button onPress={workout.finish} style={[styles.container]} mode="text">
          Finish
        </Button>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    marginRight: 16,
  },
});

const FinishWorkoutButtonComponent = observer(_FinishWorkoutButtonComponent);
export {FinishWorkoutButtonComponent};
