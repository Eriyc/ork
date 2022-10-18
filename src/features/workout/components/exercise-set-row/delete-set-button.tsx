import {Text} from '@/features/ui';
import React, {FC} from 'react';
import {StyleSheet, Pressable} from 'react-native';
import {useWorkoutStore} from '../../store';

const DeleteSetButton: FC<{setId: string; exerciseId: string}> = ({
  setId,
  exerciseId,
}) => {
  const remove = useWorkoutStore(s => s.removeSet);

  return (
    <Pressable
      style={[styles.container]}
      onPress={() => remove(exerciseId, setId)}>
      <Text>Remove</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {},
});

export {DeleteSetButton};
