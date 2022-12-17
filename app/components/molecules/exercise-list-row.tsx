import React, { FC, useMemo } from 'react';
import {
  View,
  StyleSheet,
  ListRenderItem,
  ListRenderItemInfo,
  Pressable,
} from 'react-native';
import { Theme, useTheme } from '@/themes';
import { ExerciseWithMuscles } from '@/queries/exercises';
import { Text } from '../atoms/text';
import { Label } from '../atoms/label';
import { useAppNavigation } from '@/navigators/app-navigator';

type ExerciseListRowProps = ListRenderItemInfo<ExerciseWithMuscles>;

const ExerciseListRow: FC<ExerciseListRowProps> = ({ item }) => {
  const { theme } = useTheme();
  const styles = useMemo(() => createStyles(theme), [theme]);

  const navigation = useAppNavigation();

  return (
    <Pressable
      style={[styles.container]}
      onPress={() => navigation.navigate('ExerciseDetails', { id: item.id })}>
      <Text>{item.label}</Text>
    </Pressable>
  );
};

const createStyles = (_theme: Theme) =>
  StyleSheet.create({
    container: { padding: 16 },
  });

const renderExercise: ListRenderItem<ExerciseWithMuscles> = props => (
  <ExerciseListRow {...props} />
);

export { ExerciseListRow, renderExercise };
