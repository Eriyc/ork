import React, {FC, PropsWithChildren, useMemo} from 'react';
import {Pressable, ViewStyle} from 'react-native';

import {useTheme} from '../theme';

interface Props {
  style?: ViewStyle | ViewStyle[];
  onPress?: () => void;
}

const Card: FC<PropsWithChildren<Props>> = ({children, style, onPress}) => {
  const theme = useTheme();
  const color = useMemo(
    () => ({backgroundColor: theme.colors.card}),
    [theme.colors.card],
  );

  return (
    <Pressable style={[color, style]} onPress={onPress}>
      {children}
    </Pressable>
  );
};

export {Card};
