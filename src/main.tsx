import 'react-native-get-random-values';
import 'react-native-url-polyfill/auto';

import React, {FC} from 'react';
import {ThemeProvider} from './theme';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {ORKNavigation} from './navigation';
import {UserListener} from './stores';

const ORKMain: FC = () => {
  return (
    <ThemeProvider>
      <UserListener>
        <SafeAreaProvider>
          <ORKNavigation />
        </SafeAreaProvider>
      </UserListener>
    </ThemeProvider>
  );
};

export default ORKMain;
