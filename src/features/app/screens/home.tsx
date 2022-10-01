import {generateUsername} from '@/features/auth';
import {useAuth} from '@/features/context';
import {Text} from '@/features/ui';
import React, {FC} from 'react';
import {View} from 'react-native';

const HomeScreen: FC = () => {
  const auth = useAuth();

  return (
    <View>
      <Text>
        WE GO JIM,{' '}
        {auth.authData?.first_name ?? generateUsername(auth.authData!.email)}
      </Text>
    </View>
  );
};

export {HomeScreen};
