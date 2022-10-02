import React, {FC, PropsWithChildren, useMemo} from 'react';
import {TextStyle, Text as RNText, TextProps} from 'react-native';

import {useTheme} from '../theme';

type Props = {
  style?: false | TextStyle | (TextStyle | false)[];
} & Pick<
  TextProps,
  | 'maxFontSizeMultiplier'
  | 'adjustsFontSizeToFit'
  | 'minimumFontScale'
  | 'allowFontScaling'
>;
const Text: FC<PropsWithChildren<Props>> = ({style, children, ...props}) => {
  const theme = useTheme();
  const text = useMemo(() => ({color: theme.colors.text}), [theme.colors.text]);

  return (
    <RNText
      style={[text, style]}
      minimumFontScale={1}
      maxFontSizeMultiplier={1.8}
      {...props}>
      {children}
    </RNText>
  );
};

export {Text};
