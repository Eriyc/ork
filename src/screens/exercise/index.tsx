import {exercises} from '@/data';
import {useMainNavigation} from '@/navigation';
import React, {FC} from 'react';
import {View, StyleSheet} from 'react-native';
import {Surface, Text, TouchableRipple} from 'react-native-paper';

const ExerciseListScreen: FC = () => {
  const navigation = useMainNavigation();

  const handleNavigate = (id: number) => {
    navigation.navigate('exerciseDetails', {id});
  };

  return (
    <View style={[styles.container]}>
      {exercises.map(exercise => (
        <Surface key={exercise.id}>
          <TouchableRipple onPress={() => handleNavigate(exercise.id)}>
            <Text>{exercise.title}</Text>
          </TouchableRipple>
        </Surface>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
});

export {ExerciseListScreen};
