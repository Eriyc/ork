import { StyleSheet, TextInput, TextInputProps } from 'react-native';
import React, { FC } from 'react';
import { useTheme, Theme } from '@/themes';
import { useMemo } from 'react';
import Animated, {
  interpolateColor,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';

export const Input: FC<TextInputProps> = props => {
  const { theme } = useTheme();
  const styles = useMemo(() => createStyles(theme), [theme]);
  const focused = useSharedValue(0);

  const animatedStyles = useAnimatedStyle(() => {
    return {
      borderColor: interpolateColor(
        focused.value,
        [0, 1],
        [theme.colors.mainTextColor, theme.colors.primary],
      ),
    };
  });

  return (
    <Animated.View style={[animatedStyles, styles.inputContainer]}>
      <TextInput
        onFocus={() => (focused.value = withTiming(1))}
        onEndEditing={() => (focused.value = withTiming(0))}
        style={[styles.input]}
        placeholderTextColor={
          theme.dark
            ? theme.palette.tundora['300']
            : theme.palette.tundora['400']
        }
        {...props}
      />
    </Animated.View>
  );
};

const createStyles = (theme: Theme) =>
  StyleSheet.create({
    input: {
      backgroundColor: theme.colors.mainBackground,
      color: theme.colors.mainTextColor,
      padding: 16,
    },
    inputContainer: {
      backgroundColor: theme.colors.mainBackground,
      borderColor: theme.colors.mainTextColor,
      borderWidth: 1.5,
      borderRadius: 4,
      marginBottom: 10,
    },
  });
