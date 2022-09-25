import React from 'react';
import {Pressable, StyleSheet, View} from 'react-native';
import type {BottomTabBarProps} from '@react-navigation/bottom-tabs';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Card, useTheme} from '@/features/ui';
import type {TabStack} from '../navigation';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

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

  return (
    <View style={[styles.container]}>
      <Card style={styles.card}>
        <SafeAreaView
          style={styles.innerContainer}
          edges={['bottom', 'left', 'right']}>
          {Object.entries(descriptors).map(([route, descriptor], index) => {
            const active = state.index === index;

            return (
              <Pressable
                style={_pressed => [styles.button, active && styles.active]}
                key={route}
                onPress={() => navigation.navigate(descriptor.route.name)}>
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
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  card: {
    flex: 1,
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
