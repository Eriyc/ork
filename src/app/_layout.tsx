import "react-native-get-random-values";
import "./index.css";

import { Slot, SplashScreen } from "expo-router";
import {
  Auth,
  AuthProvider,
  StandardAuthExecutor,
} from "~/features/authentication";
import { Theme, ThemeProvider } from "@react-navigation/native";
import { NAV_THEME } from "~/lib/constants";
import { globalStorage } from "~/lib/storage";
import { useEffect, useState } from "react";
import { useColorScheme } from "~/lib/use-color-scheme";

SplashScreen.preventAutoHideAsync();

const LIGHT_THEME: Theme = {
  dark: false,
  colors: NAV_THEME.light,
  fonts: NAV_THEME.fonts,
};
const DARK_THEME: Theme = {
  dark: true,
  colors: NAV_THEME.dark,
  fonts: NAV_THEME.fonts,
};

const auth = new Auth(new StandardAuthExecutor());

export default function RootLayout() {
  const { colorScheme, setColorScheme, isDarkColorScheme } = useColorScheme();
  const [isColorSchemeLoaded, setIsColorSchemeLoaded] = useState(false);

  useEffect(() => {
    (async () => {
      const theme = globalStorage.getItem("theme");

      if (!theme) {
        globalStorage.setItem("theme", colorScheme);
        setIsColorSchemeLoaded(true);
        return;
      }
      const colorTheme = theme === "dark" ? "dark" : "light";
      if (colorTheme !== colorScheme) {
        setColorScheme(colorTheme);

        setIsColorSchemeLoaded(true);
        return;
      }
      setIsColorSchemeLoaded(true);
    })().finally(() => {
      SplashScreen.hideAsync();
    });
    // eslint-disable-next-line react-compiler/react-compiler
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!isColorSchemeLoaded) {
    return null;
  }

  return (
    <AuthProvider auth={auth}>
      <ThemeProvider value={isDarkColorScheme ? DARK_THEME : LIGHT_THEME}>
        <RootNavigation />
      </ThemeProvider>
    </AuthProvider>
  );
}

const RootNavigation = () => {
  return <Slot />;
};
