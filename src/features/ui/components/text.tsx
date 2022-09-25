import React, {FC, PropsWithChildren, useMemo} from 'react';
import {TextStyle, Text as RNText} from 'react-native';

import {useTheme} from '../theme';

type Props = {
  style?: false | TextStyle | (TextStyle | false)[];
};
const Text: FC<PropsWithChildren<Props>> = ({style, children}) => {
  const theme = useTheme();
  const text = useMemo(() => ({color: theme.colors.text}), [theme.colors.text]);

  return <RNText style={[text, style]}>{children}</RNText>;
};

export {Text};
