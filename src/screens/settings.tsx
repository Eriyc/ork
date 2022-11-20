import {ThemeSwitcher} from '@/components';
import {useAuthStore} from '@/models';
import React, {FC} from 'react';
import {View, StyleSheet} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {useMMKV} from 'react-native-mmkv';
import {Button, Text} from 'react-native-paper';

const whitelist = ['sb-zurlildrajalrjnmrarx-auth-token', '@Theme', '@user'];

const SettingsScreen: FC = () => {
  const {signOut} = useAuthStore();
  const instance = useMMKV();

  const clearStorage = () =>
    instance
      .getAllKeys()
      .filter(key => !whitelist.includes(key))
      .forEach(key => {
        // console.log(key);
        instance.delete(key);
      });

  return (
    <ScrollView contentContainerStyle={[styles.container]}>
      <View>
        <Text variant="titleLarge" style={styles.sectionHeader}>
          Theme
        </Text>
      </View>
      <ThemeSwitcher />
      <Button onPress={clearStorage}>Clear local storage</Button>
      <Button onPress={() => signOut()}>Sign Out</Button>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {},
  sectionHeader: {
    marginHorizontal: 16,
    marginVertical: 8,
  },
});

export {SettingsScreen};
