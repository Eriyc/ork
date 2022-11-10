import {darkTheme} from '@/theme';
import React, {FC} from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {Surface, TouchableRipple} from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

type Props = {
  onPress?: () => void;
  action?: 'Sign In' | 'Continue' | 'Sign Up';
};

const AppleAuthButton: FC<Props> = ({onPress, action}) => {
  return (
    <View style={[styles.outerContainer]}>
      <Surface style={[styles.button]}>
        <TouchableRipple style={[styles.container]} onPress={onPress}>
          <View style={[styles.content]}>
            <Icon name="apple" color="white" size={32} style={[styles.icon]} />
            <Text style={[styles.label]}>{action} with Apple</Text>
          </View>
        </TouchableRipple>
      </Surface>
    </View>
  );
};

const styles = StyleSheet.create({
  outerContainer: {
    flexGrow: 1,
    marginBottom: 8,
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

    backgroundColor: 'black',
  },
  iconContainer: {
    backgroundColor: 'white',
    padding: 8,
    borderRadius: darkTheme.roundness / 2,
  },
  icon: {
    margin: 4,
  },
  label: {
    color: 'white',
    fontWeight: '600',
    flexGrow: 1,
    textAlign: 'center',
  },
});
export {AppleAuthButton};
