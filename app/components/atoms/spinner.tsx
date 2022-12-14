import React, { FC } from 'react';
import { ActivityIndicator, ActivityIndicatorProps } from 'react-native';
import { useTheme } from '@/themes';

export const Spinner: FC<ActivityIndicatorProps> = props => {
  const { theme } = useTheme();
  const spinnerColor = props.color ? props.color : theme.colors.primary;
  return (
    <ActivityIndicator
      {...props}
      color={spinnerColor}
      testID={'loading-spinner'}
    />
  );
};
