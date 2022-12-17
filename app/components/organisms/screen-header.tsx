import React, { FC, useMemo } from 'react';
import { StyleSheet } from 'react-native';
import { Theme, useTheme } from '@/themes';
import { SpacingComponent } from '../atoms/spacing';
import { BackButton } from '../molecules/back-button';
import { Title } from '../atoms/title';

type ScreenHeaderProps = {
  hideBackButton?: boolean;
  title?: string;
  rightActions?: JSX.Element[];
};

const ScreenHeaderComponent: FC<ScreenHeaderProps> = props => {
  const { theme } = useTheme();
  const styles = useMemo(() => createStyles(theme), [theme]);
  return (
    <SpacingComponent sides={['horizontal']} style={[styles.header]}>
      {!props.hideBackButton && <BackButton />}
      <SpacingComponent sides={['left']} style={[styles.flex]}>
        <Title>{props.title}</Title>
      </SpacingComponent>
      {props.rightActions && props.rightActions.map(component => component)}
    </SpacingComponent>
  );
};

const createStyles = (theme: Theme) =>
  StyleSheet.create({
    container: {},
    header: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    flex: {
      flex: 1,
    },
  });

export { ScreenHeaderComponent };
