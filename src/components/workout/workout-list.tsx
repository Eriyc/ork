import React, {FC} from 'react';
import {WorkoutStore} from '@/models/workout-store';
import {observer} from 'mobx-react-lite';
import {StyleSheet} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import {ExerciseProps, WorkoutExerciseComponent} from './exercise';
import {WorkoutListHeaderComponent} from './list-header';
import {DIMENSIONS} from '@/utils/constants';
import {WorkoutListFooterComponent} from './list-footer';

type WorkoutListProps = {
  workout: WorkoutStore;
};

const renderExerciseComponent = (props: ExerciseProps) => <WorkoutExerciseComponent {...props} />;

const _WorkoutListComponent: FC<WorkoutListProps> = ({workout}) => {
  return (
    <>
      <FlatList
        style={[styles.container]}
        contentContainerStyle={[styles.content]}
        data={workout.sections.slice() /* #slice() converts to an array, mobx workaround */}
        renderItem={renderExerciseComponent}
        keyExtractor={item => item.id}
        ListFooterComponent={WorkoutListFooterComponent}
        ListHeaderComponent={WorkoutListHeaderComponent}
      />
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
  },
  content: {
    paddingBottom: DIMENSIONS.HEIGHT * 0.3,
  },
  header: {},
});

const WorkoutListComponent = observer(_WorkoutListComponent);
export {WorkoutListComponent};
