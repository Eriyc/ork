import React, { FC, useMemo } from 'react';
import { StyleSheet, Pressable } from 'react-native';
import { Theme, useTheme } from '@/themes';
import { IconButton } from '../atoms/icon-button';
import { Text } from '../atoms/text';
import { SpacingComponent } from '../atoms/spacing';

type SettingsRowProps = {
  onPress?: () => void;
  label?: string;
  icon?: string;
};

const SettingsRowComponent: FC<SettingsRowProps> = ({
  onPress,
  label,
  icon,
}) => {
  const { theme } = useTheme();
  const styles = useMemo(() => createStyles(theme), [theme]);

  return (
    <Pressable
      style={({ pressed }) => [pressed && styles.pressed]}
      onPress={onPress}>
      <SpacingComponent sides={['horizontal']} style={[styles.container]}>
        <IconButton
          name={icon}
          backgroundColor="transparent"
          color={theme.colors.mainTextColor}
        />
        <SpacingComponent sides={['horizontal']} style={[styles.textContainer]}>
          <Text>{label}</Text>
        </SpacingComponent>
        <IconButton
          name="chevron-right"
          backgroundColor="transparent"
          color={theme.colors.mainTextColor}
        />
      </SpacingComponent>
    </Pressable>
  );
};

const createStyles = (theme: Theme) =>
  StyleSheet.create({
    pressed: {
      opacity: 0.8,
    },
    container: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    textContainer: {
      flex: 1,
    },
  });

export { SettingsRowComponent };
