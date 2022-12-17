import React, { FC, useMemo } from 'react';
import { StyleSheet } from 'react-native';
import { Theme, useTheme } from '@/themes';
import { SpacingComponent } from '../atoms/spacing';
import { BackButton } from '../molecules/back-button';
import { Title } from '../atoms/title';
import { useAppNavigation } from '@/navigators/app-navigator';

type ScreenHeaderProps = {
  hideBackButton?: boolean;
  title?: string;
  rightActions?: JSX.Element[];
};

const ScreenHeaderComponent: FC<ScreenHeaderProps> = props => {
  const { theme } = useTheme();
  const styles = useMemo(() => createStyles(theme), [theme]);

  const navigation = useAppNavigation();
  const showBackButton = !props.hideBackButton && navigation.canGoBack();

  return (
    <SpacingComponent sides={['horizontal']} style={[styles.header]}>
      {showBackButton && <BackButton />}
      <SpacingComponent
        sides={props.hideBackButton ? ['right'] : ['left']}
        style={[styles.flex]}>
        <Title>{props.title}</Title>
      </SpacingComponent>
      {props.rightActions && props.rightActions.map(component => component)}
    </SpacingComponent>
  );
};

const createStyles = (_theme: Theme) =>
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
