import React, { PropsWithChildren } from 'react';
import {
  StyleProp,
  StyleSheet,
  Text as BaseText,
  TextStyle,
} from 'react-native';
import { useTheme, Theme } from '@/themes';
import { FC } from 'react';
import { useMemo } from 'react';

export const Text: FC<PropsWithChildren & { style?: StyleProp<TextStyle> }> = ({
  children,
  style,
}) => {
  const { theme } = useTheme();
  const styles = useMemo(() => createStyles(theme), [theme]);

  return <BaseText style={[styles.text, style]}>{children}</BaseText>;
};

const createStyles = (theme: Theme) =>
  StyleSheet.create({
    text: {
      color: theme.colors.mainTextColor,
      fontSize: 20,
    },
  });
