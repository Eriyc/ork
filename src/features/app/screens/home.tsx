import {useAuth} from '@/features/context';
import {Text} from '@/features/ui';
import React, {FC} from 'react';
import {Button, View} from 'react-native';

const HomeScreen: FC = () => {
  const auth = useAuth();

  return (
    <View>
      <Text>Get on it, {auth.authData?.first_name}</Text>
      <Button title="Sign Out" onPress={auth.signOut} />
    </View>
  );
};

export {HomeScreen};
