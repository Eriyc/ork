import {LightTheme, useThemeFull, DarkTheme} from '@/features/ui';
import React, {FC} from 'react';
import {StyleSheet} from 'react-native';
import Animated, {
  useDerivedValue,
  useAnimatedStyle,
  interpolateColor,
  withTiming,
} from 'react-native-reanimated';
import {SafeAreaView} from 'react-native-safe-area-context';
import {ColorThemeSwitcher} from '../components/color-theme-switcher';

const EditThemeScreen: FC = () => {
  const [obj] = useThemeFull();

  const progress = useDerivedValue(() => withTiming(obj.dark ? 1 : 0));

  const rStyle = useAnimatedStyle(() => {
    const backgroundColor = interpolateColor(
      progress.value,
      [0, 1],
      [LightTheme.colors.background, DarkTheme.colors.background],
    );

    return {
      backgroundColor,
    };
  });

  return (
    <Animated.View style={[rStyle, styles.background]}>
      <SafeAreaView>
        <ColorThemeSwitcher />
      </SafeAreaView>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
});

export {EditThemeScreen};
