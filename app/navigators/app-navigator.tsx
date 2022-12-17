import React from 'react';
import {
  createNativeStackNavigator,
  NativeStackNavigationProp,
} from '@react-navigation/native-stack';
import { HomeScreen } from '@/screens/app/home';
import { useNavigation } from '@react-navigation/native';

export type AppStackParamList = {
  Home: undefined;
};

// use this with the hook useNavigation like this:
// const navigation = useNavigation<AppNavProps<'Home'>>();
// to have access to the navigation prop
export type AppNavProps<T extends keyof AppStackParamList> =
  NativeStackNavigationProp<AppStackParamList, T>;
export const useAppNavigation = <T extends keyof AppStackParamList>() =>
  useNavigation<AppNavProps<T>>();

const Stack = createNativeStackNavigator<AppStackParamList>();

export const AppNavigator: React.FC = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={'Home'}
        component={HomeScreen}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};
