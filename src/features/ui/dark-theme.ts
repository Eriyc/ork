import {DarkTheme as RNDarkTheme} from '@react-navigation/native';
import {Theme} from './types';

let rgb2hex = (c: string) =>
  '#' +
  c
    .match(/\d+/g)!
    .map(x => (+x).toString(16).padStart(2, '0'))
    .join('');

const Darktheme: Theme = {
  dark: true,
  colors: {
    background: rgb2hex(RNDarkTheme.colors.background),
    border: rgb2hex(RNDarkTheme.colors.border),
    card: rgb2hex(RNDarkTheme.colors.card),
    notification: rgb2hex(RNDarkTheme.colors.notification),
    primary: rgb2hex(RNDarkTheme.colors.primary),
    text: rgb2hex(RNDarkTheme.colors.text),
    button: '#333',
  },
};

export default Darktheme;
