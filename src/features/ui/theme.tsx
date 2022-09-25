import {Theme} from '@react-navigation/native';
import React, {
  createContext,
  FC,
  PropsWithChildren,
  useContext,
  useState,
} from 'react';
import {useColorScheme} from 'react-native';
import Darktheme from './dark-theme';
import LightTheme from './light-theme';

type ThemeValue = [Theme, ThemeMode, (mode: ThemeMode) => void];
type ThemeMode = 'auto' | 'light' | 'dark';
const ThemeContext = createContext<ThemeValue>([] as any);

export const ThemeProvider: FC<PropsWithChildren> = ({children}) => {
  const [theme, setTheme] = useState<ThemeMode>('auto');
  const device = useColorScheme();

  const light = LightTheme;
  const dark = Darktheme;

  const themeObject =
    theme === 'auto'
      ? device === 'dark'
        ? dark
        : light
      : theme === 'light'
      ? light
      : dark;

  const toggle = (mode: ThemeMode) => {
    setTheme(mode);
  };

  return (
    <ThemeContext.Provider value={[themeObject, theme, toggle]}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext)[0];
export const useThemeFull = () => useContext(ThemeContext);
