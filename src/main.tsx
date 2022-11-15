import 'react-native-get-random-values';
import 'react-native-url-polyfill/auto';

import React, {FC} from 'react';
import {ThemeProvider} from './theme';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {ORKNavigation} from './navigation';

const ORKMain: FC = () => {
  return (
    <ThemeProvider>
      <SafeAreaProvider>
        <ORKNavigation />
      </SafeAreaProvider>
    </ThemeProvider>
  );
};

export default ORKMain;
