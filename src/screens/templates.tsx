import React, {FC} from 'react';
import {View, StyleSheet} from 'react-native';
import {Button} from 'react-native-paper';

const TemplatesScreen: FC = () => {
  return (
    <View style={[styles.container]}>
      <Button mode="contained-tonal">Start an empty workout</Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
});

export {TemplatesScreen};
