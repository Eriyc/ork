import React, { FC, useMemo } from 'react';
import { StyleSheet, Pressable } from 'react-native';
import { Theme, useTheme } from '@/themes';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

type IconButtonProps = {
  name?: string;
  size?: number;
  color?: string;
  backgroundColor?: string;
  onPress?: () => void;
};

const IconButton: FC<IconButtonProps> = ({
  name,
  size,
  color,
  backgroundColor,
  onPress,
}) => {
  const { theme } = useTheme();
  const styles = useMemo(() => createStyles(theme), [theme]);
  return (
    <Pressable
      pointerEvents={onPress ? 'auto' : 'none'}
      onPress={onPress}
      style={[styles.container, backgroundColor ? { backgroundColor } : {}]}>
      <Icon
        name={name ?? 'arm-flex'}
        size={size ?? 24}
        color={color ?? theme.palette.emerald['800']}
      />
    </Pressable>
  );
};

const createStyles = (theme: Theme) =>
  StyleSheet.create({
    container: {
      padding: 16,
      borderRadius: 4,
      backgroundColor: theme.palette.emerald['200'],
      justifyContent: 'center',
      alignItems: 'center',
    },
  });

export { IconButton };
