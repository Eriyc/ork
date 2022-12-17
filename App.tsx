import React, { FC } from 'react';
import { AuthProvider, useAuth } from '@/contexts/auth-context';
import { NavigationContainer } from '@react-navigation/native';
import { Layout, Spinner } from '@/components';
import { AuthNavigator } from '@/navigators/auth-navigator';
import { getNavigatorTheme, ThemeProvider, useTheme } from '@/themes';

import 'intl-pluralrules';
import './app/translations/i18n';

/** URL polyfill */
import 'react-native-url-polyfill/auto';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { AppNavigator } from '@/navigators/app-navigator';

const App: FC = () => {
  return (
    <SafeAreaProvider>
      <ThemeProvider>
        <AuthProvider>
          <Root />
        </AuthProvider>
      </ThemeProvider>
    </SafeAreaProvider>
  );
};

const Root: FC = () => {
  const { theme } = useTheme();
  const { currentUser, loading } = useAuth();

  if (loading) {
    return (
      <Layout>
        <Spinner size="large" />
      </Layout>
    );
  }

  return (
    <>
      <NavigationContainer theme={getNavigatorTheme(theme)}>
        {currentUser !== null ? <AppNavigator /> : <AuthNavigator />}
      </NavigationContainer>
    </>
  );
};

export default App;
