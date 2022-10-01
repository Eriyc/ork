import React, {FC, PropsWithChildren, useMemo} from 'react';
import {Pressable, ViewProps, ViewStyle} from 'react-native';

import {useTheme} from '../theme';

interface Props {
  style?: ViewStyle | ViewStyle[];
  onLayout?: ViewProps['onLayout'];
  onPress?: () => void;
}

const Card: FC<PropsWithChildren<Props>> = ({
  children,
  style,
  onPress,
  onLayout,
}) => {
  const theme = useTheme();
  const color = useMemo(
    () => ({backgroundColor: theme.colors.card}),
    [theme.colors.card],
  );

  return (
    <Pressable style={[color, style]} onPress={onPress} onLayout={onLayout}>
      {children}
    </Pressable>
  );
};

export {Card};
