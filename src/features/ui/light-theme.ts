import {DefaultTheme} from '@react-navigation/native';
import {Theme} from './types';

let rgb2hex = (c: string) =>
  '#' +
  c
    .match(/\d+/g)!
    .map(x => (+x).toString(16).padStart(2, '0'))
    .join('');

const LightTheme: Theme = {
  dark: false,
  colors: {
    background: rgb2hex(DefaultTheme.colors.background),
    border: rgb2hex(DefaultTheme.colors.border),
    card: rgb2hex(DefaultTheme.colors.card),
    notification: rgb2hex(DefaultTheme.colors.notification),
    primary: rgb2hex(DefaultTheme.colors.primary),
    text: rgb2hex(DefaultTheme.colors.text),
    button: rgb2hex(DefaultTheme.colors.border),
  },
};

export default LightTheme;
