import React from 'react';
import {Pressable, StyleSheet, useWindowDimensions, View} from 'react-native';
import type {BottomTabBarProps} from '@react-navigation/bottom-tabs';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Card, useTheme} from '@/features/ui';
import type {TabStack} from '../navigation';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {ActiveWorkoutSheet, useWorkoutSheet} from '@/features/workout';
import Animated from 'react-native-reanimated';

const IconFor = (route: keyof TabStack) => {
  switch (route) {
    case 'Home':
      return 'home';
    case 'Settings':
      return 'cog';
    case 'ExerciseLibrary':
      return 'library';
    case 'History':
      return 'history';
    case 'MyTemplates':
      return 'play';
  }
};

export const ORKTabBar = (props: BottomTabBarProps) => {
  const theme = useTheme();
  const {descriptors, navigation, state} = props;
  const {height} = useWindowDimensions();

  const sheet = useWorkoutSheet();

  return (
    <View style={[styles.wrapper]}>
      <View pointerEvents="box-none" style={[styles.sheetWrapper, {height}]}>
        <ActiveWorkoutSheet />
      </View>
      <Animated.View style={sheet.tabStyle}>
        <Card
          style={styles.card}
          onLayout={({nativeEvent: {layout}}) => {
            sheet.setTabHeight(layout.height);
          }}>
          <SafeAreaView
            style={styles.innerContainer}
            edges={['bottom', 'left', 'right']}>
            {Object.entries(descriptors).map(([route, descriptor], index) => {
              const active = state.index === index;

              let onPress = () => navigation.navigate(descriptor.route.name);
              if (active && index === 2) {
                onPress = sheet.showSheet;
              }

              return (
                <Pressable
                  style={_pressed => [styles.button, active && styles.active]}
                  key={route}
                  onPress={onPress}>
                  <Icon
                    name={IconFor(descriptor.route.name as keyof TabStack)}
                    style={[active && styles.activeText]}
                    size={22}
                    color={theme.colors.text}
                  />
                </Pressable>
              );
            })}
          </SafeAreaView>
        </Card>
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    position: 'relative',
  },
  sheetWrapper: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },
  container: {
    flexDirection: 'row',
  },
  card: {
    flexDirection: 'row',
  },
  innerContainer: {
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'space-evenly',
    alignItems: 'center',
    paddingHorizontal: 16.0,
  },
  button: {
    flex: 1,
    padding: 16.0,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontWeight: '600',
    marginTop: 4.0,
  },
  active: {},
  activeText: {
    color: 'green',
  },
});
