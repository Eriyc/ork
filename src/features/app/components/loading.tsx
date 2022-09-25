import React from 'react';
import {View, ActivityIndicator, StyleSheet} from 'react-native';

export const Loading = () => {
  return (
    <View style={[styles.loader]}>
      <ActivityIndicator color={'#000'} animating={true} size="small" />
    </View>
  );
};

const styles = StyleSheet.create({
  loader: {
    flex: 1,
    justifyContent: 'center',
  },
});
