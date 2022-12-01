import 'react-native-get-random-values';
import 'react-native-url-polyfill/auto';

import {extend} from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';

import React, {FC} from 'react';
import {ThemeProvider} from './theme';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {ORKNavigation} from './navigation';
import {StoreProvider} from './models';
import {observer} from 'mobx-react-lite';

extend(relativeTime);

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
