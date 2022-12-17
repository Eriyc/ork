import React, { FC, PropsWithChildren, useMemo } from 'react';
import { View, StyleSheet, ViewStyle, StyleProp } from 'react-native';
import { Theme, useTheme } from '@/themes';

type Edge = 'top' | 'right' | 'bottom' | 'left' | 'horizontal' | 'vertical';

type SpacingComponentProps = {
  sides?: Edge[];
  style?: StyleProp<ViewStyle>;
} & PropsWithChildren;

const SpacingComponent: FC<SpacingComponentProps> = ({
  sides,
  children,
  style,
}) => {
  const { theme } = useTheme();
  const styles = useMemo(() => createStyles(theme), [theme]);

  const classes = sides ? sides.map(side => styles[side]) : styles.all;

  return <View style={[classes, style]}>{children}</View>;
};

const createStyles = (_theme: Theme) =>
  StyleSheet.create({
    container: {},
    all: {
      margin: 16,
    },
    vertical: {
      marginVertical: 16,
    },
    horizontal: {
      marginHorizontal: 16,
    },
    top: {
      marginTop: 16,
    },
    right: {
      marginRight: 16,
    },
    bottom: {
      marginBottom: 16,
    },
    left: {
      marginLeft: 16,
    },
  });

export { SpacingComponent };
