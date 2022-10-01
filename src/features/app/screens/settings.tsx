import {useAuth} from '@/features/context';
import {Text} from '@/features/ui';
import React, {FC} from 'react';
import {Button, View} from 'react-native';
import {AppVersion} from '../components/app-version';
import {useAppNavigation} from '../navigation';

const SettingsScreen: FC = () => {
  const navigation = useAppNavigation();
  const auth = useAuth();

  return (
    <View>
      <Text>Settings</Text>
      <Text>{auth.authData?.email}</Text>
      <Button
        title="Change theme"
        onPress={() => navigation.navigate('EditTheme')}
      />
      <Button color="orange" title="Sign Out" onPress={auth.signOut} />
      <Button
        color="red"
        title="Delete account"
        onPress={auth.deleteOwnAccount}
      />
      <AppVersion />
    </View>
  );
};

export {SettingsScreen};
