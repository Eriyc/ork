import React, { FC, PropsWithChildren, useMemo } from 'react';
import { View, StyleSheet } from 'react-native';
import { useTheme, Theme } from '@/themes';

export const Form: FC<PropsWithChildren> = props => {
  const { theme } = useTheme();
  const styles = useMemo(() => createStyles(theme), [theme]);

  return <View style={styles.form}>{props.children}</View>;
};

const createStyles = (_theme: Theme) =>
  StyleSheet.create({
    form: {
      padding: 16,
    },
  });
