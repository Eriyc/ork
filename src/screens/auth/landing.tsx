import {useAuthStore} from '@/models';
import {useMainNavigation} from '@/navigation';
import React, {FC} from 'react';
import {View, StyleSheet, Platform} from 'react-native';
import {Button, Text, useTheme} from 'react-native-paper';
import {SafeAreaView} from 'react-native-safe-area-context';
import {AppleAuthButton} from './apple-auth-button';
import {GoogleAuthButton} from './google-auth-button';

const ORKLanding: FC = () => {
  const isIos = Platform.OS === 'ios';
  const theme = useTheme();
  const navigation = useMainNavigation();

  const signInWithProvider = useAuthStore().signIn;

  return (
    <SafeAreaView style={[styles.container]}>
      <Text variant="displayLarge" style={[styles.title]}>
        ORK
      </Text>
      <View style={[styles.fields]}>
        <Text style={[styles.text]}>Continue with email and password:</Text>
        <Button
          mode="contained"
          style={styles.button}
          contentStyle={[styles.buttonPadding]}
          onPress={() => navigation.navigate('signIn')}>
          Sign in
        </Button>
        <Button
          mode="contained-tonal"
          contentStyle={[styles.buttonPadding]}
          onPress={() => navigation.navigate('signUp')}>
          Sign up
        </Button>
      </View>
      <View style={[styles.divider]}>
        <View style={[styles.dividerPart, {backgroundColor: theme.colors.outline}]} />
        <Text style={styles.dividerText}>OR</Text>
        <View style={[styles.dividerPart, {backgroundColor: theme.colors.outline}]} />
      </View>
      <Text style={[styles.text]}>Quickly continue with a provider:</Text>
      <View style={[styles.buttons]}>
        {isIos && <AppleAuthButton action="Continue" onPress={() => signInWithProvider('apple')} />}
        <GoogleAuthButton action="Continue" onPress={() => signInWithProvider('google')} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 16,
    justifyContent: 'center',
    flex: 1,
  },
  title: {
    marginBottom: 32,
  },
  buttons: {
    flexDirection: 'column',
    justifyContent: 'center',
  },
  button: {
    marginBottom: 8,
  },
  buttonPadding: {
    padding: 8,
  },
  fields: {},
  divider: {
    flexDirection: 'row',
    marginVertical: 16,
    marginHorizontal: 8,
  },
  dividerPart: {
    height: 2,
    flex: 1,
    alignSelf: 'center',
  },
  dividerText: {
    alignSelf: 'center',
    paddingHorizontal: 5,
    fontSize: 16,
  },
  text: {marginBottom: 16, marginHorizontal: 8},
});

export {ORKLanding};
