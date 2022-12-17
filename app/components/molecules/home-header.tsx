import React, { FC, useMemo } from 'react';
import { View, StyleSheet } from 'react-native';
import { useTranslation } from 'react-i18next';
import { Theme, useTheme } from '@/themes';
import { Text } from '../atoms/text';
import { useCurrentUser } from '@/contexts/auth-context';
import { SpacingComponent } from '../atoms/spacing';

const HomeHeaderComponent: FC = () => {
  const { t } = useTranslation();
  const { theme } = useTheme();
  const styles = useMemo(() => createStyles(theme), [theme]);

  const currentUser = useCurrentUser();

  return (
    <View style={[styles.container]}>
      <SpacingComponent sides={['horizontal']}>
        <Text>
          {t('common:greeting')} {currentUser.username}
        </Text>
      </SpacingComponent>
    </View>
  );
};

const createStyles = (theme: Theme) =>
  StyleSheet.create({
    container: {},
  });

export { HomeHeaderComponent };
