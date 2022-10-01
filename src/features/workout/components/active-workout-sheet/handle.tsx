import {Text, useTheme} from '@/features/ui';
import {BottomSheetHandleProps} from '@gorhom/bottom-sheet';
import React, {FC} from 'react';
import {View, StyleSheet, StatusBar} from 'react-native';
import Animated, {
  Extrapolation,
  interpolate,
  useAnimatedStyle,
} from 'react-native-reanimated';

const ActiveWorkoutSheetHandle: FC<BottomSheetHandleProps> = ({
  animatedIndex,
}) => {
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
        animated
        backgroundColor={'gray'}
        barStyle={theme.dark ? 'light-content' : 'dark-content'}
      />
      <Animated.View style={[toolbarStyle]}>
        <Text>Toolbar</Text>
      </Animated.View>
      <Animated.View style={[handleStyle]}>
        <View style={[styles.titleContainer]}>
          <Text style={[styles.title]}>Afternoon Workout</Text>
          <Text style={[styles.timer]}>00:10</Text>
        </View>
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
