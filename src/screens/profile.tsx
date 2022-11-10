import {useUser} from '@/stores';
import React, {FC} from 'react';
import {View, StyleSheet} from 'react-native';
import {ActivityIndicator, Text} from 'react-native-paper';

const ProfileScreen: FC = () => {
  const user = useUser(state => state.user);

  if (!user) {
    return <ActivityIndicator />;
  }

  return (
    <View style={[styles.container]}>
      <Text>{user.id}</Text>
      <Text>{user.name}</Text>
      <Text>{user.email}</Text>
      <Text>{user.provider}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
});

export {ProfileScreen};
