import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {AppStack, AuthStack, Loading, useTheme} from './features';

import {useAuth} from './features/context/auth';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {StatusBar} from 'react-native';

const Stack = createNativeStackNavigator();

export const Router = () => {
  const {authData, loading} = useAuth();
  const theme = useTheme();

  if (loading) {
    return <Loading />;
  }

  return (
    <NavigationContainer theme={theme}>
      <StatusBar
        animated
        barStyle={theme.dark ? 'light-content' : 'dark-content'}
      />
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          animationTypeForReplace: authData ? 'push' : 'pop',
        }}>
        {authData ? (
          <Stack.Screen name="app" component={AppStack} />
        ) : (
          <Stack.Screen name="auth" component={AuthStack} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};
