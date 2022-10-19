import {ThemeSwitcher} from '@/components';
import {useMainNavigation} from '@/navigation';
import React, {FC} from 'react';
import {View, StyleSheet} from 'react-native';
import {Card, Text} from 'react-native-paper';

const HomeScreen: FC = () => {
  return (
    <Card>
      <View style={[styles.container]}>
        <Text>Gaming</Text>
      </View>
    </Card>
  );
};

const styles = StyleSheet.create({
  container: {},
});

export {HomeScreen};
