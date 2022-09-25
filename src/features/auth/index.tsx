import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {SignInScreen} from './screens/sign-in';
import {
  NavigationProp,
  ParamListBase,
  useNavigation,
} from '@react-navigation/native';

interface AuthRoutes extends ParamListBase {
  SignIn: undefined;
}

const Stack = createStackNavigator<AuthRoutes>();

const AuthStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="SignIn" component={SignInScreen} />
    </Stack.Navigator>
  );
};

const useAuthNavigation = () => useNavigation<NavigationProp<AuthRoutes>>();
export {AuthStack, useAuthNavigation};
export * from './services';
export * from './types';
