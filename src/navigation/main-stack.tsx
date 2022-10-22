import {HomeScreen} from '@/screens/home';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {FC} from 'react';
import {
  NavigationProp,
  NavigatorScreenParams,
  RouteProp,
  useNavigation,
  useRoute,
} from '@react-navigation/native';
import {SettingsScreen} from '@/screens/settings';
import {IconButton} from 'react-native-paper';
import {TemplatesScreen} from '@/screens/templates';
import {HistoryScreen} from '@/screens/history';
import {ExerciseListScreen} from '@/screens/exercise';
import {ExerciseDetailsScreen} from '@/screens/exercise/details';
import {exercises} from '@/data';

type HomeStackRoutes = {
  overview: undefined;
  templates: undefined;
  exercises: undefined;
};

type MainStackRoutes = {
  home: NavigatorScreenParams<HomeStackRoutes>;
  settings: undefined;
  history: undefined;
  exerciseDetails: {id: number};
};

const Stack = createStackNavigator<MainStackRoutes>();
const Tabs = createBottomTabNavigator<HomeStackRoutes>();

const HomeStack: FC = () => {
  return (
    <Tabs.Navigator>
      <Tabs.Screen
        name="overview"
        component={HomeScreen}
        options={({navigation}) => ({
          headerRight: () => (
            <IconButton
              icon="cog"
              onPress={() => navigation.navigate('settings')}
            />
          ),
        })}
      />
      <Tabs.Screen name="templates" component={TemplatesScreen} />
      <Tabs.Screen name="exercises" component={ExerciseListScreen} />
    </Tabs.Navigator>
  );
};

const findExerciseTitle = (id: number) =>
  exercises.find(e => e.id === id)?.title;

export const MainStack: FC = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="home"
        component={HomeStack}
        options={{headerShown: false}}
      />
      <Stack.Screen name="settings" component={SettingsScreen} />
      <Stack.Screen name="history" component={HistoryScreen} />
      <Stack.Screen
        name="exerciseDetails"
        component={ExerciseDetailsScreen}
        options={({route}) => ({
          presentation: 'modal',
          title: findExerciseTitle(route.params.id),
        })}
      />
    </Stack.Navigator>
  );
};

export const useMainNavigation = <T extends keyof MainStackRoutes>() =>
  useNavigation<NavigationProp<MainStackRoutes, T>>();
export const useMainRoute = <T extends keyof MainStackRoutes>() =>
  useRoute<RouteProp<MainStackRoutes, T>>();
