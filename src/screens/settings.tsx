import {ThemeSwitcher} from '@/components';
import React, {FC} from 'react';
import {View, StyleSheet} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {Text} from 'react-native-paper';

const SettingsScreen: FC = () => {
  return (
    <ScrollView contentContainerStyle={[styles.container]}>
      <View>
        <Text variant="titleLarge" style={styles.sectionHeader}>
          Theme
        </Text>
      </View>
      <ThemeSwitcher />
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
