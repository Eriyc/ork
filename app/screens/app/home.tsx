import React, { FC, useMemo } from 'react';
import { Theme, useTheme } from '@/themes';
import { useTranslation } from 'react-i18next';
import { StyleSheet } from 'react-native';
import {
  Button,
  HomeHeaderComponent,
  Layout,
  SpacingComponent,
  Title,
} from '@/components';
import { useAuth, useCurrentUser } from '@/contexts/auth-context';

const HomeScreen: FC = () => {
  const { t } = useTranslation();
  const { logout } = useAuth();
  const user = useCurrentUser();
  const { theme } = useTheme();
  const styles = useMemo(() => createStyles(theme), [theme]);

  return (
    <Layout>
      <SpacingComponent>
        <Title>{t('common:ork')}</Title>
      </SpacingComponent>
      <HomeHeaderComponent />
      <Button variant="danger_secondary" onPress={logout}>
        {t('auth:signOut')}
      </Button>
    </Layout>
  );
};

const createStyles = (theme: Theme) =>
  StyleSheet.create({
    container: {},
  });

export { HomeScreen };
