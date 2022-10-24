import {Set, WorkoutSection} from '@/stores';
import React, {FC, memo, useMemo} from 'react';
import {StyleSheet, SectionListRenderItem} from 'react-native';
import {MD3Theme, Surface, Text, useTheme} from 'react-native-paper';

type SetRowProps = {
  set: Set;
  index: number;
};

const WorkoutSetRow: FC<SetRowProps> = memo(
  ({set, index}) => {
    const theme = useTheme();
    const styles = useMemo(() => createStyles(theme), [theme]);

    return (
      <Surface
        style={[styles.row, index % 2 === 1 && styles.evenRow]}
        elevation={0}>
        <Text>vikt: {set.weight}</Text>
      </Surface>
    );
  },
  (prev, next) => prev.index === next.index,
);

const createStyles = (theme: MD3Theme) =>
  StyleSheet.create({
    container: {},
    row: {
      display: 'flex',
      flexDirection: 'row',
      marginHorizontal: 4,
      padding: 8,
      backgroundColor: theme.colors.surface,
      elevation: 0,
    },
    evenRow: {
      backgroundColor: theme.colors.elevation.level1,
    },
  });

const renderSetRow: SectionListRenderItem<Set, WorkoutSection> = ({
  item,
  index,
}) => <WorkoutSetRow set={item} index={index} />;

export {WorkoutSetRow, renderSetRow};
