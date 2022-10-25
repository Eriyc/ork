import {ThemeSwitcher} from '@/components';
import React, {FC} from 'react';
import {View, StyleSheet} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {useMMKV} from 'react-native-mmkv';
import {Button, Text} from 'react-native-paper';

const SettingsScreen: FC = () => {
  const instance = useMMKV();

  return (
    <ScrollView contentContainerStyle={[styles.container]}>
      <View>
        <Text variant="titleLarge" style={styles.sectionHeader}>
          Theme
        </Text>
      </View>
      <ThemeSwitcher />
      <Button onPress={() => instance.clearAll()}>Clear local storage</Button>
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
