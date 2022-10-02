import {Text, useTheme} from '@/features/ui';
import {calcDiff} from '@/utils';
import {BottomSheetHandleProps} from '@gorhom/bottom-sheet';
import React, {FC, useEffect, useState} from 'react';
import {View, StyleSheet, StatusBar, Pressable} from 'react-native';
import Animated, {
  Extrapolation,
  interpolate,
  useAnimatedStyle,
} from 'react-native-reanimated';
import {useWorkoutStore} from '../../store';
import {useWorkoutSheet} from './sheet-provider';

const ActiveWorkoutSheetHandle: FC<BottomSheetHandleProps> = ({
  animatedIndex,
}) => {
  const {showSheet} = useWorkoutSheet();
  const startTime = useWorkoutStore(s => s.startTime);
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    if (!startTime) {
      return;
    }

    const timeoutId = setTimeout(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearTimeout(timeoutId);
  }, [currentTime, startTime]);

  const handleStyle = useAnimatedStyle(() => {
    const opacity = interpolate(
      animatedIndex.value,
      [0, 0.4],
      [1, 0],
      Extrapolation.CLAMP,
    );

    const display = animatedIndex.value < 0.4 ? 'flex' : 'none';

    return {
      opacity,
      display,
    };
  });
  const toolbarStyle = useAnimatedStyle(() => {
    const opacity = interpolate(
      animatedIndex.value,
      [1, 0.6],
      [1, 0],
      Extrapolation.CLAMP,
    );
    const display = animatedIndex.value > 0.6 ? 'flex' : 'none';

    return {
      opacity,
      display,
    };
  });

  const theme = useTheme();
  return (
    <View style={[styles.container]}>
      <StatusBar
        backgroundColor={'#f4f4f4'}
        barStyle={theme.dark ? 'light-content' : 'dark-content'}
      />
      <Animated.View style={[toolbarStyle]}>
        <Text>Toolbar</Text>
      </Animated.View>
      <Animated.View style={[handleStyle]}>
        <Pressable onPress={showSheet}>
          <View style={[styles.titleContainer]}>
            <Text style={[styles.title]} maxFontSizeMultiplier={1.4}>
              Afternoon Workout
            </Text>
            {startTime && (
              <Text style={[styles.timer]} maxFontSizeMultiplier={1.3}>
                {calcDiff(currentTime, startTime)}
              </Text>
            )}
          </View>
        </Pressable>
      </Animated.View>
    </View>
  );
};

export const HANDLEBAR_HEIGHT = 60;

const styles = StyleSheet.create({
  container: {
    height: HANDLEBAR_HEIGHT,
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
    overflow: 'hidden',
    backgroundColor: 'gray',
  },
  titleContainer: {
    alignItems: 'center',
    height: 70,
  },
  title: {
    fontSize: 20,
  },
  timer: {
    fontSize: 18,
  },
});

export {ActiveWorkoutSheetHandle};
