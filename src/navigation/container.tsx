import {darkNavTheme, lightNavTheme, useThemeConfig} from '@/theme';
import {NavigationContainer} from '@react-navigation/native';
import React, {FC} from 'react';
import {MainStack} from './main-stack';

const ORKNavigation: FC = () => {
  const {theme} = useThemeConfig();

  return (
    <NavigationContainer theme={theme === 'dark' ? darkNavTheme : lightNavTheme}>
      <MainStack />
    </NavigationContainer>
  );
};

export {ORKNavigation};
