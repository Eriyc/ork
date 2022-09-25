import {useAuth} from '@/features/context';
import {Text} from '@/features/ui';
import React, {FC} from 'react';
import {Button, View} from 'react-native';

const HomeScreen: FC = () => {
  const auth = useAuth();

  return (
    <View>
      <Text>
        Get on it,{' '}
        {auth.authData?.first_name ?? auth.authData?.email.split('@')[0]}
      </Text>
      <Button title="Sign Out" onPress={auth.signOut} />
      <Button title="Delete account" onPress={auth.deleteOwnAccount} />
    </View>
  );
};

export {HomeScreen};
