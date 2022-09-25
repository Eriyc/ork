import {Text} from '@/features/ui';
import React, {FC} from 'react';
import {Button, View} from 'react-native';
import {AppVersion} from '../components/app-version';
import {useAppNavigation} from '../navigation';

const SettingsScreen: FC = () => {
  const navigation = useAppNavigation();

  return (
    <View>
      <Text>Settings</Text>
      <Button
        title="Change theme"
        onPress={() => navigation.navigate('EditTheme')}
      />
      <AppVersion />
    </View>
  );
};

export {SettingsScreen};
