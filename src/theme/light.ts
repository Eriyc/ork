import {Theme as NavTheme} from '@react-navigation/native';
import {MD3LightTheme} from 'react-native-paper';

const lightTheme = {
  ...MD3LightTheme,

  // Specify a custom property
  custom: 'property',

  // Specify a custom property in nested object
  colors: {
    ...MD3LightTheme.colors,
  },
};

const lightNavTheme: NavTheme = {
  dark: false,
  colors: {
    primary: lightTheme.colors.primary,
    background: lightTheme.colors.background,
    card: lightTheme.colors.elevation.level2,
    text: lightTheme.colors.onSurface,
    border: lightTheme.colors.outline,
    notification: lightTheme.colors.error,
  },
};

export {lightTheme, lightNavTheme};
