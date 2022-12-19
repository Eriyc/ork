import React, { FC, PropsWithChildren, useMemo } from 'react';
import { View, StyleSheet, StyleProp, ViewStyle } from 'react-native';
import { useTranslation } from 'react-i18next';
import { Theme, useTheme } from '@/themes';

type SurfaceProps = {
  style?: StyleProp<ViewStyle>;
} & PropsWithChildren;

const Surface: FC<SurfaceProps> = ({ children }) => {
  const { t } = useTranslation();
  const { theme } = useTheme();
  const styles = useMemo(() => createStyles(theme), [theme]);
  return <View style={[styles.container]}>{children}</View>;
};

const createStyles = (theme: Theme) =>
  StyleSheet.create({
    container: {
      padding: 16,
      backgroundColor: theme.palette.tundora['700'],
    },
  });

export { Surface };
