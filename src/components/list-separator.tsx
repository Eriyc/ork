import React, {FC} from 'react';
import {View, StyleSheet} from 'react-native';

const ListSeparatorComponent: FC = () => {
  return <View style={[styles.container]} />;
};

const styles = StyleSheet.create({
  container: {
    height: 16,
  },
});

export {ListSeparatorComponent};
