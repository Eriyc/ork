import {useMainNavigation} from '@/navigation';
import React, {FC} from 'react';
import {View, StyleSheet, StyleProp, ViewStyle, Pressable} from 'react-native';
import {Avatar, ProgressBar, Text} from 'react-native-paper';
import {User} from '@/models/authentication-store/user';

type UserGreetingProps = {
  user: User;
  style?: StyleProp<ViewStyle>;
};

const UserGreeting: FC<UserGreetingProps> = ({user, style}) => {
  const navigation = useMainNavigation();

  const xp = 1000;
  const needed = 1023;

  return (
    <Pressable style={[styles.userSection, style]} onPress={() => navigation.navigate('profile')}>
      {user.avatar ? <Avatar.Image source={{uri: user.avatar}} /> : <Avatar.Icon icon="account" />}
      <View style={[styles.xpBarContainer]}>
        <Text variant="headlineSmall" allowFontScaling={false}>
          Time to exercise {user.displayname.split(' ')[0]}
        </Text>
        <ProgressBar progress={xp / needed} style={[styles.xpBar]} />
        <Text variant="labelLarge" allowFontScaling={false}>
          {xp} / {needed} XP
        </Text>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  xpBarContainer: {
    marginLeft: 8,
    flexDirection: 'column',
    flex: 1,
  },
  xpBar: {
    flex: 1,
  },
  userSection: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export {UserGreeting};
