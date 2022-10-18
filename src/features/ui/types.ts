import {Theme as RNNTheme} from '@react-navigation/native';

export interface Theme extends RNNTheme {
  colors: RNNTheme['colors'] & {
    button: string;
  };
}
