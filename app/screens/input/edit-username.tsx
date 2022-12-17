import React, { FC, useMemo } from 'react';
import { View, StyleSheet } from 'react-native';
import { useTranslation } from 'react-i18next';
import { Theme, useTheme } from '@/themes';
import { Layout } from '@/components';

const EditUsernameScreen: FC = () => {
  const { t } = useTranslation();
  const { theme } = useTheme();
  const styles = useMemo(() => createStyles(theme), [theme]);
  return <Layout />;
};

const createStyles = (theme: Theme) =>
  StyleSheet.create({
    container: {},
  });

export { EditUsernameScreen };
