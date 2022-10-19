import React, {FC} from 'react';
import {StyleSheet} from 'react-native';
import {ThemeProvider} from './theme';
import {SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context';
import {HomeScreen} from './screens/home';
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

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
  },
});

export default ORKMain;
