import React, {FC} from 'react';
import {useMainNavigation} from '@/navigation';
import {Button} from 'react-native-paper';

const AddExerciseButtonComponent: FC = () => {
  const navigation = useMainNavigation();

  return (
    <Button
      onPress={() =>
        navigation.navigate('exercisePicker', {
          returnTo: 'templates',
        })
      }>
      Add exercise
    </Button>
  );
};

export {AddExerciseButtonComponent};
