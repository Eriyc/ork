import {useAuthStore} from '@/models';
import React, {FC} from 'react';
import {View, StyleSheet} from 'react-native';
import {ActivityIndicator, Text} from 'react-native-paper';

const ProfileScreen: FC = () => {
  const {user} = useAuthStore();

  if (!user) {
    return <ActivityIndicator />;
  }

  return (
    <View style={[styles.container]}>
      <Text>{user.id}</Text>
      <Text>{user.displayname}</Text>
      <Text>{user.email}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
});

export {ProfileScreen};
