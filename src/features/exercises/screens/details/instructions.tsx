import {Card, Text} from '@/features/ui';
import React, {FC} from 'react';
import {StyleSheet, View} from 'react-native';
import {useExercise} from '../../actions';

const ExerciseInstructionsScreen: FC = () => {
  const exercise = useExercise();

  return (
    <View>
      <View style={[styles.imageContainer]}>{/* image here */}</View>
      <Card style={[styles.instructions]}>
        <Text style={[styles.instructionsTitle]}>Instructions</Text>
        {exercise.data?.instructions?.split('\n')?.map((step, index) => (
          <Text style={[styles.instructionsText]} key={index}>
            {index + 1}.{'\t'} {step}
          </Text>
        ))}
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  imageContainer: {
    height: 200,
    backgroundColor: 'green',
  },
  instructionsTitle: {
    fontWeight: '700',
    fontSize: 18,
    marginBottom: 8,
  },
  instructionsText: {
    fontSize: 15,
    marginBottom: 4,
  },
  instructions: {
    padding: 16.0,
  },
});

export {ExerciseInstructionsScreen};
