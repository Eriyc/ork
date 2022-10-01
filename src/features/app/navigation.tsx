import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {EditThemeScreen, HomeScreen, SettingsScreen} from './screens';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {ORKTabBar} from './components/tab-bar';
import {
  NavigationProp,
  NavigatorScreenParams,
  RouteProp,
  useNavigation,
  useRoute,
} from '@react-navigation/native';
import {
  DetailRoutes,
  ExerciseDetailsNavigator,
  ExerciseLibraryScreen,
} from '../exercises';
import {SheetProvider, WorkoutHistoryScreen} from '../workout';
import {MyTemplatesScreen} from '../workout/screens/templates';

type AppStack = {
  TabStack: NavigatorScreenParams<TabStack>;
  EditTheme: undefined;
  ExerciseDetails: NavigatorScreenParams<DetailRoutes> & {id: number};
};

export type TabStack = {
  Home: undefined;
  Settings: undefined;
  ExerciseLibrary: undefined;
  History: undefined;
  MyTemplates: undefined;
};

const Stack = createStackNavigator<AppStack>();
const BottomTabs = createBottomTabNavigator<TabStack>();

const TabStack = () => {
  return (
    <SheetProvider>
      <BottomTabs.Navigator tabBar={props => <ORKTabBar {...props} />}>
        <BottomTabs.Screen name="Home" component={HomeScreen} />
        <BottomTabs.Screen
          name="History"
          component={WorkoutHistoryScreen}
          options={{
            tabBarLabel: 'History',
            headerShown: true,
          }}
        />
        <BottomTabs.Screen name="MyTemplates" component={MyTemplatesScreen} />
        <BottomTabs.Screen
          name="ExerciseLibrary"
          component={ExerciseLibraryScreen}
          options={{
            title: 'Library',
            tabBarLabel: 'Library',
            headerShown: true,
          }}
        />
        <BottomTabs.Screen name="Settings" component={SettingsScreen} />
      </BottomTabs.Navigator>
    </SheetProvider>
  );
};

const AppStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="TabStack" component={TabStack} />
      <Stack.Group
        screenOptions={{
          headerShown: true,
        }}>
        <Stack.Screen
          name="ExerciseDetails"
          component={ExerciseDetailsNavigator}
        />
      </Stack.Group>
      <Stack.Group>{/* Workout routes */}</Stack.Group>
      <Stack.Screen
        name="EditTheme"
        component={EditThemeScreen}
        options={{
          headerShown: true,
        }}
      />
    </Stack.Navigator>
  );
};

export const useAppNavigation = () => useNavigation<NavigationProp<AppStack>>();
export const useAppRoute = <T extends keyof AppStack>() =>
  useRoute<RouteProp<AppStack, T>>();
export {AppStack};
