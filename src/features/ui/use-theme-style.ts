import {useThemeFull} from './theme';
import {
  useDerivedValue,
  useAnimatedStyle,
  interpolateColor,
  withTiming,
} from 'react-native-reanimated';

export const useThemeStyle = <T extends string>(
  key: T,
  output: [any, any],
): {[key: string]: any} => {
  const [obj] = useThemeFull();

  const progress = useDerivedValue(() => {
    return withTiming(obj.dark ? 1 : 0);
  });

  const rStyle = useAnimatedStyle(() => {
    const value = interpolateColor(progress.value, [0, 1], output);

    return {
      [key]: value,
    };
  });

  return rStyle;
};
