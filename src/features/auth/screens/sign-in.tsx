import {useAuth} from '@/features/context/auth';
import {Text, useTheme} from '@/features/ui';
import React, {FC} from 'react';
import {Button, Dimensions, Platform, View, ViewStyle} from 'react-native';
import {
  appleAuthAndroid,
  AppleButton,
} from '@invertase/react-native-apple-authentication';
import {GoogleSigninButton} from '@react-native-google-signin/google-signin';

const SignInScreen: FC = () => {
  const auth = useAuth();
  const theme = useTheme();
  return (
    <View>
      <Text>Sign In</Text>
      <Button title="Sign in With " onPress={auth.signIn} />
      {(Platform.OS === 'ios' || appleAuthAndroid.isSupported) && (
        <View style={buttonContainer}>
          <AppleButton
            onPress={() => auth.signInWithProvider('apple')}
            buttonStyle={
              theme.dark ? AppleButton.Style.WHITE : AppleButton.Style.BLACK
            }
            buttonType={AppleButton.Type.SIGN_IN}
            style={buttonStyleApple}
            cornerRadius={2}
          />
        </View>
      )}
      <View style={buttonContainer}>
        <GoogleSigninButton
          style={buttonStyle}
          onPress={() => auth.signInWithProvider('google')}
          size={GoogleSigninButton.Size.Wide}
          color={GoogleSigninButton.Color.Light}
        />
      </View>
    </View>
  );
};

const buttonContainer: ViewStyle = {
  flexDirection: 'row',
  justifyContent: 'center',
};

const buttonStyleApple = {
  width: Dimensions.get('screen').width * 0.5 - 8,
  height: 42,
  marginBottom: 8,
  borderRadius: 4,
};

const buttonStyle: ViewStyle = {
  width: Dimensions.get('screen').width * 0.5,
  height: 48,
};

export {SignInScreen};
