import React, { FC, useMemo } from 'react';
import { View, StyleSheet, Image } from 'react-native';
import { useTranslation } from 'react-i18next';
import { Theme, useTheme } from '@/themes';
import {
  BackButton,
  Layout,
  SpacingComponent,
  Text,
  Title,
} from '@/components';
import { useCurrentUser } from '@/contexts/auth-context';

const MyProfileScreen: FC = () => {
  const { t } = useTranslation();
  const { theme } = useTheme();
  const styles = useMemo(() => createStyles(theme), [theme]);

  const currentUser = useCurrentUser();

  return (
    <Layout>
      <SpacingComponent sides={['horizontal']} style={[styles.header]}>
        <BackButton />
        <SpacingComponent sides={['left']}>
          <Title>{t('common:profile')}</Title>
        </SpacingComponent>
      </SpacingComponent>
      <SpacingComponent style={[styles.avatarSection]}>
        <View style={[styles.avatar]}>
          {currentUser.avatar_url ? (
            <Image source={{ uri: currentUser.avatar_url }} />
          ) : (
            <Text style={[styles.greeting]}>
              {currentUser.username[0].toUpperCase()}
            </Text>
          )}
        </View>
        <SpacingComponent sides={['top']}>
          <Text>{currentUser.username}</Text>
        </SpacingComponent>
      </SpacingComponent>
    </Layout>
  );
};

const createStyles = (theme: Theme) =>
  StyleSheet.create({
    header: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    avatarSection: {
      justifyContent: 'center',
      alignItems: 'center',
    },
    avatar: {
      backgroundColor: theme.colors.primary,
      aspectRatio: 1,
      height: 128,
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 4,
    },
    greeting: {
      fontWeight: '700',
      fontSize: 32,
    },
  });

export { MyProfileScreen };
