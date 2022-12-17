import React, { FC, useMemo } from 'react';
import { StyleSheet } from 'react-native';
import { useTranslation } from 'react-i18next';
import { Theme, useTheme } from '@/themes';
import { IconButton } from '../atoms/icon-button';
import { useAppNavigation } from '@/navigators/app-navigator';

const BackButton: FC = () => {
  const { t } = useTranslation();
  const { theme } = useTheme();
  const styles = useMemo(() => createStyles(theme), [theme]);

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

const createStyles = (theme: Theme) =>
  StyleSheet.create({
    container: {},
  });

export { BackButton };
