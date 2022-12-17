import React, { FC, useMemo } from 'react';
import { View, StyleSheet, Image, Pressable } from 'react-native';
import { useTranslation } from 'react-i18next';
import { Theme, useTheme } from '@/themes';
import { Text } from '../atoms/text';
import { useCurrentUser } from '@/contexts/auth-context';
import { SpacingComponent } from '../atoms/spacing';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useAppNavigation } from '@/navigators/app-navigator';

const HomeHeaderComponent: FC = () => {
  const { t } = useTranslation();
  const { theme } = useTheme();
  const styles = useMemo(() => createStyles(theme), [theme]);

  const navigation = useAppNavigation();

  const currentUser = useCurrentUser();

  return (
    <Pressable
      style={[styles.wrapper]}
      onPress={() => navigation.navigate('MyProfile')}>
      <SpacingComponent style={[styles.container]}>
        <View style={[styles.avatar]}>
          {currentUser.avatar_url ? (
            <Image source={{ uri: currentUser.avatar_url }} />
          ) : (
            <Text style={[styles.greeting]}>
              {currentUser.username[0].toUpperCase()}
            </Text>
          )}
        </View>
        <View style={[styles.textContainer]}>
          <Text>{currentUser.username}</Text>
        </View>
        <View style={styles.icon}>
          <Icon
            color={theme.colors.mainTextColor}
            size={24}
            name="chevron-right"
          />
        </View>
      </SpacingComponent>
    </Pressable>
  );
};

const createStyles = (theme: Theme) =>
  StyleSheet.create({
    avatar: {
      backgroundColor: theme.colors.primary,
      aspectRatio: 1,
      minWidth: 64,
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 4,
    },
    icon: {
      justifyContent: 'center',
    },
    greeting: {
      fontWeight: '700',
    },
    container: {
      flexDirection: 'row',
    },
    wrapper: {
      marginBottom: 16,
    },
    textContainer: {
      justifyContent: 'center',
      marginLeft: 8,
      flex: 1,
    },
  });

export { HomeHeaderComponent };
