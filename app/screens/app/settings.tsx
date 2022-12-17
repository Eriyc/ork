import React, { FC, useMemo } from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { useTranslation } from 'react-i18next';
import { Theme, useTheme } from '@/themes';
import {
  Layout,
  ScreenHeaderComponent,
  SettingsRowComponent,
} from '@/components';

const SettingsScreen: FC = () => {
  const { t } = useTranslation();
  const { theme } = useTheme();

  const styles = useMemo(() => createStyles(theme), [theme]);

  return (
    <Layout>
      <ScreenHeaderComponent title={t('common:settings')} />
      <ScrollView>
        <SettingsRowComponent label="Account" icon="account-box" />
      </ScrollView>
    </Layout>
  );
};

const createStyles = (theme: Theme) =>
  StyleSheet.create({
    container: {},
  });

export { SettingsScreen };
