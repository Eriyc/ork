import {useMainNavigation} from '@/navigation';
import React, {FC} from 'react';
import {View, StyleSheet, StyleProp, ViewStyle, Pressable} from 'react-native';
import {Avatar, ProgressBar, Text} from 'react-native-paper';

type UserGreetingProps = {
  username: string;
  totalXp: number;
  currentXp: number;
  style?: StyleProp<ViewStyle>;
};

const UserGreeting: FC<UserGreetingProps> = ({
  currentXp,
  totalXp,
  username,
  style,
}) => {
  const navigation = useMainNavigation();
  return (
    <Pressable
      style={[styles.userSection, style]}
      onPress={() => navigation.navigate('profile')}>
      <Avatar.Icon icon="account" />
      <View style={[styles.xpBarContainer]}>
        <Text variant="headlineSmall" allowFontScaling={false}>
          Time to exercise {username}
        </Text>
        <ProgressBar progress={currentXp / totalXp} style={[styles.xpBar]} />
        <Text variant="labelLarge" allowFontScaling={false}>
          {currentXp} / {totalXp} XP
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
