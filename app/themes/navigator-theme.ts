import { DefaultTheme, Theme as NTheme } from '@react-navigation/native';
import type { Theme } from './theme-context';

export const getNavigatorTheme = (theme: Theme): NTheme => ({
  ...DefaultTheme,
  dark: theme.dark,
  colors: {
    ...DefaultTheme.colors,
    background: 'transparent',
  },
});
