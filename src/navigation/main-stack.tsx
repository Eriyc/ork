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

type HomeStackRoutes = {
  overview: undefined;
  templates: undefined;
};

type MainStackRoutes = {
  home: NavigatorScreenParams<HomeStackRoutes>;
  settings: undefined;
  history: undefined;
};

const Stack = createStackNavigator<MainStackRoutes>();
const Tabs = createBottomTabNavigator<HomeStackRoutes>();

const HomeStack: FC = () => {
  return (
    <Tabs.Navigator
      screenOptions={({navigation}) => ({
        headerRight: () => (
          <IconButton
            icon="cog"
            onPress={() => navigation.navigate('settings')}
          />
        ),
      })}>
      <Tabs.Screen name="overview" component={HomeScreen} />
      <Tabs.Screen name="templates" component={TemplatesScreen} />
    </Tabs.Navigator>
  );
};

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
    </Stack.Navigator>
  );
};

export const useMainNavigation = <T extends keyof MainStackRoutes>() =>
  useNavigation<NavigationProp<MainStackRoutes, T>>();
export const useMainRoute = <T extends keyof MainStackRoutes>() =>
  useRoute<RouteProp<MainStackRoutes, T>>();
