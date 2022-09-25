import {useAuth} from '@/features/context/auth';
import {Text} from '@/features/ui';
import React, {FC} from 'react';
import {Button, View} from 'react-native';

const SignInScreen: FC = () => {
  const auth = useAuth();
  return (
    <View>
      <Text>Sign In</Text>
      <Button title="Sign in" onPress={auth.signIn} />
      <Button title="Sign in with GOOGLE" onPress={auth.signInWithProvider} />
    </View>
  );
};

export {SignInScreen};
