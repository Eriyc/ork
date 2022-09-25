import 'react-native-url-polyfill/auto';
import 'react-native-get-random-values';

import React, {FC} from 'react';
import {Router} from './router';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {AuthProvider} from './features/context/auth';
import {APIProvider, ThemeProvider} from './features';

const ORKEntrypoint: FC = () => {
  return (
    <GestureHandlerRootView style={full}>
      <APIProvider>
        <AuthProvider>
          <ThemeProvider>
            <Router />
          </ThemeProvider>
        </AuthProvider>
      </APIProvider>
    </GestureHandlerRootView>
  );
};

const full = {
  flex: 1,
};

export default ORKEntrypoint;
