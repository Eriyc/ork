import React, { FC } from 'react';
import { useTheme } from '@/themes';
import { IconButton } from '../atoms/icon-button';
import { useAppNavigation } from '@/navigators/app-navigator';

const BackButton: FC = () => {
  const { theme } = useTheme();

  const navigation = useAppNavigation();

  return (
    <IconButton
      onPress={navigation.goBack}
      name="arrow-left"
      backgroundColor="transparent"
      color={theme.colors.mainTextColor}
    />
  );
};

export { BackButton };
