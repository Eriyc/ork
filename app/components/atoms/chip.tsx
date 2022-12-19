import React, { FC, PropsWithChildren, useMemo } from 'react';
import { StyleSheet, Pressable } from 'react-native';
import { Theme, useTheme } from '@/themes';
import { Label } from './label';

type ChipProps = PropsWithChildren<{
  color?: string;
  onPress?: () => void;
}>;

const ChipComponent: FC<ChipProps> = ({ children, onPress }) => {
  const { theme } = useTheme();
  const styles = useMemo(() => createStyles(theme), [theme]);
  return (
    <Pressable
      pointerEvents={onPress ? 'auto' : 'none'}
      style={[styles.container]}>
      <Label style={[styles.text]}>{children}</Label>
    </Pressable>
  );
};

const createStyles = (theme: Theme) =>
  StyleSheet.create({
    text: {
      textTransform: 'capitalize',
      color: theme.colors.mainTextColor,
    },
    container: {
      borderRadius: 4,
      paddingHorizontal: 8,
      paddingVertical: 4,
      backgroundColor: theme.palette.emerald['700'],
    },
  });

export { ChipComponent };
