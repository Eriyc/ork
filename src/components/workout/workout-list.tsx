import {WorkoutStore} from '@/models/workout-store';
import {observer} from 'mobx-react-lite';
import React, {FC} from 'react';
import {View} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import {AddExerciseButtonComponent} from './add-exercise-button';
import {renderExerciseComponent} from './exercise';

type WorkoutListProps = {
  workout: WorkoutStore;
};

const _WorkoutListComponent: FC<WorkoutListProps> = ({workout}) => {
  return (
    <View>
      <FlatList
        data={workout.sections.slice()}
        renderItem={renderExerciseComponent}
        keyExtractor={item => item.id}
        ListFooterComponent={AddExerciseButtonComponent}
      />
    </View>
  );
};

const WorkoutListComponent = observer(_WorkoutListComponent);
export {WorkoutListComponent};
