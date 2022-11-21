import React, {FC} from 'react';
import {WorkoutStore} from '@/models/workout-store';
import {observer} from 'mobx-react-lite';
import {StyleSheet} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import {AddExerciseButtonComponent} from './add-exercise-button';
import {renderExerciseComponent} from './exercise';

type WorkoutListProps = {
  workout: WorkoutStore;
};

const _WorkoutListComponent: FC<WorkoutListProps> = ({workout}) => {
  return (
    <FlatList
      style={[styles.container]}
      data={workout.sections.slice() /* #slice() converts to an array */}
      renderItem={renderExerciseComponent}
      keyExtractor={item => item.id}
      ListFooterComponent={AddExerciseButtonComponent}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
  },
});

const WorkoutListComponent = observer(_WorkoutListComponent);
export {WorkoutListComponent};
