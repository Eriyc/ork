import {storage} from '@/utils/storage';
import {
  createContext,
  FC,
  PropsWithChildren,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react';
import {Appearance, ColorSchemeName, StatusBar} from 'react-native';
import {Provider as PaperProvider} from 'react-native-paper';
import {darkTheme} from './dark';
import {lightTheme} from './light';

export type Themes = 'light' | 'dark';

type ThemeContextValue = {
  theme: ColorSchemeName;
  isDeviceDefault: boolean;
  changeTheme: (theme: Themes | 'device') => void;
};

const ThemeContext = createContext<ThemeContextValue>({} as ThemeContextValue);

export const ThemeProvider: FC<PropsWithChildren> = ({children}) => {
  const [isDeviceDefault, setIsDeviceDefault] = useState<boolean>(true);
  const [theme, setTheme] = useState<ColorSchemeName>();

  const themeChangeListener = useCallback(() => {
    isDeviceDefault && setTheme(Appearance.getColorScheme());
  }, [isDeviceDefault]);

  useEffect(() => {
    const savedTheme = storage.getItem<Themes>('@Theme');
    changeTheme(savedTheme ?? 'device');

    const sub = Appearance.addChangeListener(themeChangeListener);
    return () => sub.remove();
  }, [themeChangeListener]);

  const changeTheme = (theme: Themes | 'device') => {
    setIsDeviceDefault(theme === 'device');
    if (theme === 'device') {
      themeChangeListener();
    } else {
      setTheme(theme);
    }
    storage.setItem('@Theme', theme);
  };

  return (
    <ThemeContext.Provider value={{theme, isDeviceDefault, changeTheme}}>
      <PaperProvider theme={theme === 'light' ? lightTheme : darkTheme}>
        <StatusBar
          animated={true}
          barStyle={theme === 'dark' ? 'light-content' : 'dark-content'}
        />
        {children}
      </PaperProvider>
    </ThemeContext.Provider>
  );
};

export const useThemeConfig = () => useContext(ThemeContext);
