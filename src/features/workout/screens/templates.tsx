import React, {FC} from 'react';
import {Button, View} from 'react-native';
import {useWorkoutStore} from '../store';

const MyTemplatesScreen: FC = () => {
  const state = useWorkoutStore();

  return (
    <View>
      <View>
        <Button
          title="Start an empty workout"
          onPress={state.status === 'inactive' ? state.startWorkout : undefined}
        />
      </View>
    </View>
  );
};

export {MyTemplatesScreen};
