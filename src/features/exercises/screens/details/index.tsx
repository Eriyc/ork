import React, {FC} from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {ExerciseInstructionsScreen} from './instructions';
import {ExerciseHistoryScreen} from './history';
import {useAppNavigation, useAppRoute} from '@/features/app';
import {ExerciseProvider, useExercise} from '../../actions';
import {useFocusEffect} from '@react-navigation/native';

export type DetailRoutes = {
  Instructions: undefined;
  History: undefined;
};

const Tabs = createMaterialTopTabNavigator<DetailRoutes>();

const InnerRouter = () => {
  const exercise = useExercise();
  const navigation = useAppNavigation();

  useFocusEffect(() => {
    navigation.setOptions({
      title: exercise.data?.name,
    });
  });

  return (
    <Tabs.Navigator>
      <Tabs.Screen name="Instructions" component={ExerciseInstructionsScreen} />
      <Tabs.Screen name="History" component={ExerciseHistoryScreen} />
    </Tabs.Navigator>
  );
};

const ExerciseDetailsNavigator: FC = () => {
  const {
    params: {id},
  } = useAppRoute<'ExerciseDetails'>();

  return (
    <ExerciseProvider id={id}>
      <InnerRouter />
    </ExerciseProvider>
  );
};

export {ExerciseDetailsNavigator};
