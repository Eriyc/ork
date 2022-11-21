import {darkTheme} from '@/theme';
import React, {FC} from 'react';
import {StyleSheet, Image, View} from 'react-native';
import {Surface, Text, TouchableRipple} from 'react-native-paper';

type Props = {
  onPress?: () => void;
  action?: 'Sign In' | 'Continue' | 'Sign Up';
};
const GoogleAuthButton: FC<Props> = ({onPress, action}) => {
  return (
    <View style={[styles.outerContainer]}>
      <Surface style={[styles.button]}>
        <TouchableRipple style={[styles.container]} onPress={onPress}>
          <View style={[styles.content]}>
            <View style={[styles.iconContainer]}>
              <Image style={[styles.icon]} source={require('@/assets/google-icon.png')} />
            </View>
            <Text style={[styles.label]}>{action} with Google</Text>
          </View>
        </TouchableRipple>
      </Surface>
    </View>
  );
};

const styles = StyleSheet.create({
  outerContainer: {
    flexGrow: 1,
  },
  content: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  container: {
    borderRadius: darkTheme.roundness * 5,
    paddingVertical: 16,
    paddingHorizontal: 32,
    flexGrow: 1,
  },
  button: {
    flexGrow: 1,
    borderRadius: darkTheme.roundness * 5,

    backgroundColor: '#4285F4',
  },
  iconContainer: {
    backgroundColor: 'white',
    padding: 8,
    borderRadius: darkTheme.roundness / 2,
  },
  icon: {
    height: 24,
    width: 24,
  },
  label: {
    color: 'white',
    fontWeight: '600',
    flexGrow: 1,
    textAlign: 'center',
  },
});

export {GoogleAuthButton};
