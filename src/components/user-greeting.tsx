import React, {FC} from 'react';
import {View, StyleSheet, StyleProp, ViewStyle} from 'react-native';
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
  return (
    <View style={[styles.userSection, style]}>
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
    </View>
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
