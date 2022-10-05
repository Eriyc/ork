import React, {FC} from 'react';
import {ActivityIndicator, FlatList, StyleSheet, View} from 'react-native';
import {useExercises} from '../hooks';
import {ExerciseRow} from '../components';
import {Text} from '@/features/ui';

const ExerciseLibraryScreen: FC = () => {
  const {data: exercises, isLoading} = useExercises();

  if (isLoading) {
    return (
      <View style={[styles.loadingContainer]}>
        <ActivityIndicator />
        <Text>Fetching exercises</Text>
      </View>
    );
  }

  return (
    <FlatList
      data={exercises}
      renderItem={props => <ExerciseRow {...props.item} />}
    />
  );
};

const styles = StyleSheet.create({
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export {ExerciseLibraryScreen};
