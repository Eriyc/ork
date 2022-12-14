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

export const Label: FC<
  PropsWithChildren & { style?: StyleProp<TextStyle> }
> = ({ children, style }) => {
  const { theme } = useTheme();
  const styles = useMemo(() => createStyles(theme), [theme]);

  return (
    <BaseText maxFontSizeMultiplier={1.5} style={[styles.text, style]}>
      {children}
    </BaseText>
  );
};

const createStyles = (theme: Theme) =>
  StyleSheet.create({
    text: {
      color: theme.colors.mainTextColor,
      fontSize: 14,
      fontWeight: '600',
    },
  });
