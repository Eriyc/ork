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
      <ScrollView contentContainerStyle={[styles.container]}>
        <SettingsRowComponent label="Account" icon="account-box" />
      </ScrollView>
    </Layout>
  );
};

const createStyles = (_theme: Theme) =>
  StyleSheet.create({
    container: {
      marginVertical: 16,
    },
  });

export { SettingsScreen };
