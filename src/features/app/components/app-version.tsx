import React, {FC} from 'react';
import {StyleSheet, View} from 'react-native';
import {Text} from '@/features/ui';
import VersionNumber from 'react-native-version-number';
import {NODE_ENV} from 'react-native-dotenv';

const AppVersion: FC = () => {
  return (
    <View style={[styles.container]}>
      <Text>
        {NODE_ENV !== 'production' && VersionNumber.bundleIdentifier} v.
        {VersionNumber.appVersion} ({VersionNumber.buildVersion})
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 4.0,
  },
});

export {AppVersion};
