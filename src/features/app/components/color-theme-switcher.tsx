import {Text, useThemeFull} from '@/features/ui';
import {Card} from '@/features/ui';
import React, {FC} from 'react';
import {StyleSheet} from 'react-native';
import {Pressable} from 'react-native';

const ColorThemeSwitcher: FC = () => {
  const [, theme, toggle] = useThemeFull();

  return (
    <Card style={[styles.container]}>
      <Pressable
        style={[styles.item, theme === 'auto' && styles.activeItem]}
        onPress={() => toggle('auto')}>
        <Text>Auto</Text>
      </Pressable>
      <Pressable
        style={[styles.item, theme === 'light' && styles.activeItem]}
        onPress={() => toggle('light')}>
        <Text>Light</Text>
      </Pressable>
      <Pressable
        style={[styles.item, theme === 'dark' && styles.activeItem]}
        onPress={() => toggle('dark')}>
        <Text>Dark</Text>
      </Pressable>
    </Card>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginHorizontal: 16.0,
  },
  item: {
    flex: 1,
    marginRight: 8,
    padding: 32.0,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
    borderColor: 'blue',
  },
  activeItem: {
    borderWidth: 1,
  },
});

export {ColorThemeSwitcher};
