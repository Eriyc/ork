import React from 'react';
import {
  createNativeStackNavigator,
  NativeStackNavigationProp,
} from '@react-navigation/native-stack';
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';

import { HomeScreen } from '@/screens/app/home';
import { MyProfileScreen } from '@/screens/app/my-profile';
import { SettingsScreen } from '@/screens/app/settings';

import { EditUsernameScreen } from '@/screens/input/edit-username';
import { ExercisesScreen } from '@/screens/app/exercises';
import { ExerciseDetailsScreen } from '@/screens/app/exercise-details';

export type AppStackParamList = {
  Home: undefined;
  MyProfile: undefined;
  Settings: undefined;

  // exercises
  Exercises: undefined;
  ExerciseDetails: { id: number };

  // input
  EditUsername: { username: string };
};

// use this with the hook useNavigation like this:
// const navigation = useNavigation<AppNavProps<'Home'>>();
// to have access to the navigation prop
export type AppNavProps<T extends keyof AppStackParamList> =
  NativeStackNavigationProp<AppStackParamList, T>;
export type AppRouteProps<T extends keyof AppStackParamList> = RouteProp<
  AppStackParamList,
  T
>;
export const useAppNavigation = <T extends keyof AppStackParamList>() =>
  useNavigation<AppNavProps<T>>();
export const useAppRoute = <T extends keyof AppStackParamList>() =>
  useRoute<AppRouteProps<T>>();

const Stack = createNativeStackNavigator<AppStackParamList>();

export const AppNavigator: React.FC = () => {
  return (
    <Stack.Navigator>
      <Stack.Group
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name={'Home'} component={HomeScreen} />
        <Stack.Screen name={'MyProfile'} component={MyProfileScreen} />
        <Stack.Screen name={'Settings'} component={SettingsScreen} />
      </Stack.Group>

      <Stack.Group
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="Exercises" component={ExercisesScreen} />
        <Stack.Screen
          name="ExerciseDetails"
          component={ExerciseDetailsScreen}
        />
      </Stack.Group>

      <Stack.Group
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name={'EditUsername'} component={EditUsernameScreen} />
      </Stack.Group>
    </Stack.Navigator>
  );
};
