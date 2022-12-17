import React, { FC, useMemo } from 'react';
import { useTheme } from '@/themes';
import { useTranslation } from 'react-i18next';
import {
  Button,
  HomeHeaderComponent,
  IconButton,
  Layout,
  ScreenHeaderComponent,
  SpacingComponent,
} from '@/components';
import { useAuth } from '@/contexts/auth-context';
import { useAppNavigation } from '@/navigators/app-navigator';

const HomeScreen: FC = () => {
  const { t } = useTranslation();
  const { logout } = useAuth();
  const { theme } = useTheme();
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
      <SpacingComponent>
        <Button
          variant="primary"
          onPress={() => navigation.navigate('Exercises')}>
          TEMP: Exercises
        </Button>
        <Button variant="danger" onPress={logout}>
          {t('auth:signOut')}
        </Button>
      </SpacingComponent>
    </Layout>
  );
};

export { HomeScreen };
