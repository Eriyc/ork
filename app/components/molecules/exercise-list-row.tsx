import React, { FC, useMemo } from 'react';
import {
  View,
  StyleSheet,
  ListRenderItem,
  ListRenderItemInfo,
} from 'react-native';
import { Theme, useTheme } from '@/themes';
import { Exercise } from '@/queries/exercises';
import { Text } from '../atoms/text';

type ExerciseListRowProps = ListRenderItemInfo<Exercise>;

const ExerciseListRow: FC<ExerciseListRowProps> = ({ item }) => {
  const { theme } = useTheme();
  const styles = useMemo(() => createStyles(theme), [theme]);
  return (
    <View style={[styles.container]}>
      <Text>{item.label}</Text>
    </View>
  );
};

const createStyles = (_theme: Theme) =>
  StyleSheet.create({
    container: { padding: 16 },
  });

const renderExercise: ListRenderItem<Exercise> = props => (
  <ExerciseListRow {...props} />
);

export { ExerciseListRow, renderExercise };
