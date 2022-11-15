import {useThemeConfig} from '@/theme';
import {Themes} from '@/theme/provider';
import {DIMENSIONS} from '@/utils/constants';
import React, {FC} from 'react';
import {View, StyleSheet} from 'react-native';
import {Surface, TouchableRipple, useTheme} from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const ThemeButton: FC<{
  icon: string;
  theme: Themes | 'device';
  onPress: (theme: Themes | 'device') => void;
  selected: boolean;
}> = ({selected, icon, onPress, theme}) => {
  const {colors} = useTheme();

  return (
    <Surface
      elevation={1}
      style={[
        styles.card,
        {
          backgroundColor: selected ? colors.primary : colors.surface,
        },
      ]}>
      <TouchableRipple
        onPress={() => onPress(theme)}
        style={[styles.touchable]}>
        <Icon
          name={icon}
          color={selected ? colors.onPrimary : colors.onSurface}
          size={32}
        />
      </TouchableRipple>
    </Surface>
  );
};

const ThemeSwitcher: FC = () => {
  const {theme, isDeviceDefault, changeTheme} = useThemeConfig();

  const selectedTheme = isDeviceDefault ? 'device' : theme;

  return (
    <View style={[styles.container]}>
      <ThemeButton
        theme="light"
        icon="weather-sunny"
        onPress={changeTheme}
        selected={selectedTheme === 'light'}
      />
      <ThemeButton
        theme="dark"
        icon="weather-night"
        onPress={changeTheme}
        selected={selectedTheme === 'dark'}
      />
      <ThemeButton
        theme="device"
        icon="cellphone-cog"
        onPress={changeTheme}
        selected={selectedTheme === 'device'}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 16,
    justifyContent: 'space-between',
    display: 'flex',
    flexDirection: 'row',
  },
  card: {
    width: DIMENSIONS.WIDTH * 0.29,
    height: DIMENSIONS.WIDTH * 0.29,
    borderRadius: 4,
  },
  touchable: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
});

export {ThemeSwitcher};
