import React, { FC, useMemo } from 'react';
import { View, StyleSheet, Image } from 'react-native';
import { useTranslation } from 'react-i18next';
import { Theme, useTheme } from '@/themes';
import {
  IconButton,
  Label,
  Layout,
  ScreenHeaderComponent,
  SpacingComponent,
  Text,
} from '@/components';
import { useCurrentUser } from '@/contexts/auth-context';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useAppNavigation } from '@/navigators/app-navigator';

const MyProfileScreen: FC = () => {
  const { t } = useTranslation();
  const { theme } = useTheme();
  const styles = useMemo(() => createStyles(theme), [theme]);

  const currentUser = useCurrentUser();
  const navigation = useAppNavigation();

  return (
    <Layout>
      <ScreenHeaderComponent title={t('common:profile')} />
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
        <SpacingComponent sides={['left']} style={[styles.flex]}>
          <Label>Usename</Label>
          <View style={[styles.usernameSection]}>
            <Text style={[styles.flex]}>{currentUser.username}</Text>
            <IconButton
              onPress={() =>
                navigation.navigate('EditUsername', {
                  username: currentUser.username,
                })
              }
              name="pencil"
              backgroundColor="transparent"
              color={theme.colors.mainTextColor}
            />
          </View>
          <View style={[styles.stats]}>
            <View style={styles.stat}>
              <Icon
                name="account"
                size={28}
                color={theme.colors.mainTextColor}
              />
              <Text>223K</Text>
            </View>
            <View style={styles.stat}>
              <Icon
                name="arm-flex"
                size={28}
                color={theme.colors.mainTextColor}
              />
              <Text>98</Text>
            </View>
          </View>
        </SpacingComponent>
      </SpacingComponent>
      <SpacingComponent>
        <Text>Activity</Text>
      </SpacingComponent>
    </Layout>
  );
};

const createStyles = (theme: Theme) =>
  StyleSheet.create({
    avatarSection: {
      alignItems: 'flex-start',
      flexDirection: 'row',
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
    flex: {
      flex: 1,
    },
    usernameSection: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    stats: {
      flexDirection: 'row',
      justifyContent: 'space-evenly',
    },
    stat: {
      justifyContent: 'center',
      alignItems: 'center',
    },
  });

export { MyProfileScreen };
