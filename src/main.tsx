import 'react-native-get-random-values';
import 'react-native-url-polyfill/auto';

import React, {FC} from 'react';
import {ThemeProvider} from './theme';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {ORKNavigation} from './navigation';
import {StoreProvider} from './models';
import {observer} from 'mobx-react-lite';

const ORKMain: FC = observer(() => {
  return (
    <SafeAreaProvider>
      <ThemeProvider>
        <StoreProvider>
          <ORKNavigation />
        </StoreProvider>
      </ThemeProvider>
    </SafeAreaProvider>
  );
});

export default ORKMain;
