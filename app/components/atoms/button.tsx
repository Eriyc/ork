import React, { PropsWithChildren, FC, useMemo } from 'react';
import {
  GestureResponderEvent,
  Platform,
  Pressable,
  StyleSheet,
  Text as BaseText,
} from 'react-native';
import { useTheme, Theme } from '@/themes';

type ButtonVariants = 'danger' | 'primary' | 'secondary' | 'danger_secondary';
type ButtonProps = {
  disabled?: boolean;
  variant?: ButtonVariants;
  onPress?: (event: GestureResponderEvent) => void;
};

export const Button: FC<PropsWithChildren & ButtonProps> = ({
  children,
  variant,
  ...props
}) => {
  const { theme } = useTheme();
  const styles = useMemo(() => createStyles(theme), [theme]);

  const isAndroid = Platform.OS === 'android';

  return (
    <Pressable
      {...props}
      style={({ pressed }) => [
        variant && styles[variant],
        styles.button,
        pressed && !isAndroid && styles.highlight,
        props.disabled && styles.disabled,
      ]}>
      <BaseText style={[styles.text, variant && styles[variant]]}>
        {children}
      </BaseText>
    </Pressable>
  );
};

const createStyles = (theme: Theme) =>
  StyleSheet.create({
    text: {
      color: theme.colors.mainTextColor,
      fontSize: 20,
      fontWeight: '500',
    },
    button: {
      alignItems: 'center',
      marginBottom: 8,
      borderRadius: 4,
      paddingHorizontal: 16,
      paddingVertical: 12,
    },
    highlight: {
      opacity: 0.8,
    },

    danger: {
      backgroundColor: theme.palette.valencia['500'],
      color: theme.palette.white,
    },
    primary: {
      backgroundColor: theme.palette.emerald['700'],
      color: theme.palette.white,
    },
    secondary: {
      backgroundColor: theme.palette.emerald['100'],
      color: theme.palette.emerald['800'],
    },
    danger_secondary: {
      backgroundColor: theme.palette.valencia['50'],
      color: theme.palette.valencia['700'],
    },
    disabled: {
      opacity: 0.5,
    },
  });
