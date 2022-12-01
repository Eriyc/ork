import {HomeScreen} from '@/screens/home';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React, {FC, useEffect, useState} from 'react';
import {NavigationProp, NavigatorScreenParams, RouteProp, useNavigation, useRoute} from '@react-navigation/native';
import {SettingsScreen} from '@/screens/settings';
import {ActivityIndicator, IconButton} from 'react-native-paper';
import {TemplatesScreen} from '@/screens/templates';
import {HistoryScreen} from '@/screens/history';
import {ExerciseListScreen} from '@/screens/exercise';
import {ExerciseDetailsScreen} from '@/screens/exercise/details';
import {exercises} from '@/data';
import {WorkoutExercisePickerScreen} from '@/screens/exercise/picker';
import {ORKLanding} from '@/screens/auth';
import {SafeAreaView} from 'react-native-safe-area-context';
import {ViewStyle} from 'react-native';
import {SignInScreen} from '@/screens/auth/sign-in';
import {SignUpScreen} from '@/screens/auth/sign-up';
import {ProfileScreen} from '@/screens/profile';

import {observer} from 'mobx-react-lite';
import {useAuthStore} from '@/models';
import {FinishWorkoutButtonComponent} from '@/components';

type HomeStackRoutes = {
  overview: undefined;
  templates: undefined;
  exercises: undefined;
};

type MainStackRoutes = {
  home: NavigatorScreenParams<HomeStackRoutes>;
  profile: undefined;
  settings: undefined;
  history: undefined;
  exerciseDetails: {id: number};
  exercisePicker: {returnTo: keyof (MainStackRoutes & HomeStackRoutes)};

  landing: undefined;
  signIn: undefined;
  signUp: undefined;
};

const Stack = createStackNavigator<MainStackRoutes>();
const Tabs = createBottomTabNavigator<HomeStackRoutes>();

const renderSettingsButton = ({navigation}: {navigation: NavigationProp<any>}) => (
  <IconButton icon="cog" onPress={() => navigation.navigate('settings')} />
);

const renderFinishWorkoutButton = () => <FinishWorkoutButtonComponent />;

const HomeStack: FC = () => {
  return (
    <Tabs.Navigator>
      <Tabs.Screen
        name="overview"
        component={HomeScreen}
        options={({navigation}) => ({
          headerRight: () => renderSettingsButton({navigation}),
        })}
      />
      <Tabs.Screen
        name="templates"
        component={TemplatesScreen}
        options={() => ({
          headerRight: () => renderFinishWorkoutButton(),
        })}
      />
      <Tabs.Screen name="exercises" component={ExerciseListScreen} />
    </Tabs.Navigator>
  );
};
const findExerciseTitle = (id: number) => exercises.find(e => e.id === id)?.title;

export const MainStack: FC = observer(() => {
  const auth = useAuthStore();
  const [ready, setReady] = useState(false);

  useEffect(() => {
    setReady(true);
  }, []);

  const style: ViewStyle = {
    flex: 1,
    justifyContent: 'center',
  };

  if (!ready) {
    return (
      <SafeAreaView style={style}>
        <ActivityIndicator size="large" />
      </SafeAreaView>
    );
  }

  return (
    <Stack.Navigator>
      {auth.isAuthenticated ? (
        <Stack.Group>
          <Stack.Screen name="home" component={HomeStack} options={{headerShown: false}} />
          <Stack.Screen name="settings" component={SettingsScreen} />
          <Stack.Screen name="history" component={HistoryScreen} />
          <Stack.Screen name="profile" component={ProfileScreen} />
          <Stack.Screen name="exercisePicker" component={WorkoutExercisePickerScreen} />
          <Stack.Screen
            name="exerciseDetails"
            component={ExerciseDetailsScreen}
            options={({route}) => ({
              presentation: 'modal',
              title: findExerciseTitle(route.params.id),
            })}
          />
        </Stack.Group>
      ) : (
        <Stack.Group>
          <Stack.Screen
            name="landing"
            component={ORKLanding}
            options={{
              headerShown: false,
              animationTypeForReplace: 'pop',
            }}
          />
          <Stack.Screen name="signIn" component={SignInScreen} />
          <Stack.Screen name="signUp" component={SignUpScreen} />
        </Stack.Group>
      )}
    </Stack.Navigator>
  );
});

export const useMainNavigation = <T extends keyof MainStackRoutes>() =>
  useNavigation<NavigationProp<MainStackRoutes, T>>();
export const useMainRoute = <T extends keyof MainStackRoutes>() => useRoute<RouteProp<MainStackRoutes, T>>();
export const useHomeRoute = <T extends keyof HomeStackRoutes>() => useRoute<RouteProp<HomeStackRoutes, T>>();
