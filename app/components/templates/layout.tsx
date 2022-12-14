import React, { FC, PropsWithChildren, useEffect, useMemo } from 'react';
import {
  Platform,
  SafeAreaView,
  StatusBar,
  StatusBarStyle,
  StyleSheet,
  View,
} from 'react-native';
import { useTheme, Theme } from '@/themes';

export const Layout: FC<PropsWithChildren> = ({ children }) => {
  const { theme } = useTheme();
  const styles = useMemo(() => createStyles(theme), [theme]);
  const isAndroid = Platform.OS === 'android';

  useEffect(() => {
    const statusBarStyle = theme.colors.statusBar as StatusBarStyle;
    StatusBar.setBarStyle(statusBarStyle);
  }, [theme]);

  if (isAndroid) {
    return (
      <View style={styles.layoutAndroid}>
        <StatusBar />
        {children}
      </View>
    );
  }

  return (
    <SafeAreaView style={styles.layoutIOS}>
      <StatusBar />
      {children}
    </SafeAreaView>
  );
};

const createStyles = (theme: Theme) =>
  StyleSheet.create({
    layoutAndroid: {
      flex: 1,
      paddingTop: 25,
      backgroundColor: theme.colors.mainBackground,
    },
    layoutIOS: {
      flex: 1,
      backgroundColor: theme.colors.mainBackground,
    },
  });
