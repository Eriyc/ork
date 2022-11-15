import {MD3DarkTheme} from 'react-native-paper';

const darkTheme = {
  ...MD3DarkTheme,

  // Specify a custom property
  custom: 'property',

  // Specify a custom property in nested object
  colors: {
    ...MD3DarkTheme.colors,
  },
};

const darkNavTheme = {
  dark: true,
  colors: {
    primary: darkTheme.colors.primary,
    background: darkTheme.colors.background,
    card: darkTheme.colors.elevation.level2,
    text: darkTheme.colors.onSurface,
    border: darkTheme.colors.outline,
    notification: darkTheme.colors.error,
  },
};

export {darkTheme, darkNavTheme};
