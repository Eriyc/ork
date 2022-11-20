import React, {FC} from 'react';
import {View, StyleSheet} from 'react-native';
import {Button, Text, TextInput} from 'react-native-paper';

const SignInScreen: FC = () => {
  const signIn = (v1: string, v2: string) => {};

  return (
    <View style={[styles.container]}>
      <Text variant="displayLarge">Sign In</Text>
      <View style={[styles.fields]}>
        <View>
          <Text variant="labelMedium">Email</Text>
          <TextInput mode="outlined" />
        </View>
        <View>
          <Text variant="labelMedium">Password</Text>
          <TextInput mode="outlined" />
          <Text style={{textAlign: 'right'}}>Forgot your password?</Text>
        </View>
        <Button mode="contained" onPress={() => signIn('', '')}>
          Sign In
        </Button>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 16,
  },
  buttons: {
    flexDirection: 'column',
    justifyContent: 'center',
  },
  fields: {},
  divider: {
    marginVertical: 16,
    height: 2,
  },
});

export {SignInScreen};
