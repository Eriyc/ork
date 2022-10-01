import React, {FC} from 'react';
import {Button, View} from 'react-native';
import {useWorkoutSheet} from '../components';

const MyTemplatesScreen: FC = () => {
  const {showSheet, hideSheet} = useWorkoutSheet();

  return (
    <View>
      <View>
        <Button title="Start an empty workout" onPress={showSheet} />
      </View>
    </View>
  );
};

export {MyTemplatesScreen};
