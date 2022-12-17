import React, { PropsWithChildren } from 'react';
import { StyleSheet, Text as BaseText } from 'react-native';
import { useTheme, Theme } from '@/themes';
import { FC } from 'react';
import { useMemo } from 'react';

export const Text: FC<PropsWithChildren> = ({ children }) => {
  const { theme } = useTheme();
  const styles = useMemo(() => createStyles(theme), [theme]);

  return <BaseText style={styles.text}>{children}</BaseText>;
};

const createStyles = (theme: Theme) =>
  StyleSheet.create({
    text: {
      color: theme.colors.mainTextColor,
      fontSize: 20,
    },
  });
