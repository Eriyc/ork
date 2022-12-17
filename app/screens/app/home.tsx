import React, { FC, useMemo } from 'react';
import { Theme, useTheme } from '@/themes';
import { useTranslation } from 'react-i18next';
import { StyleSheet } from 'react-native';
import {
  Button,
  HomeHeaderComponent,
  IconButton,
  Layout,
  ScreenHeaderComponent,
} from '@/components';
import { useAuth } from '@/contexts/auth-context';
import { useAppNavigation } from '@/navigators/app-navigator';

const HomeScreen: FC = () => {
  const { t } = useTranslation();
  const { logout } = useAuth();
  const { theme } = useTheme();
  const styles = useMemo(() => createStyles(theme), [theme]);
  const navigation = useAppNavigation();

  const settingsButton = useMemo(
    () => (
      <IconButton
        onPress={() => navigation.navigate('Settings')}
        backgroundColor="transparent"
        name="cog"
        color={theme.colors.mainTextColor}
        key="settings"
      />
    ),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [theme.colors.mainTextColor],
  );

  return (
    <Layout>
      <ScreenHeaderComponent
        title={t('common:greeting')}
        hideBackButton
        rightActions={[settingsButton]}
      />
      <HomeHeaderComponent />
      <Button variant="danger_secondary" onPress={logout}>
        {t('auth:signOut')}
      </Button>
    </Layout>
  );
};

const createStyles = (_theme: Theme) =>
  StyleSheet.create({
    container: {},
  });

export { HomeScreen };
