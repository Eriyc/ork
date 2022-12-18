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
import { ChipComponent } from '../atoms/chip';
import { SpacingComponent } from '../atoms/spacing';

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
      <SpacingComponent sides={['top']} style={styles.tags}>
        {item.muscles
          .filter(m => m.role === 'target')
          .map(muscle => (
            <ChipComponent key={muscle.id}>{muscle.musclegroup}</ChipComponent>
          ))}
      </SpacingComponent>
    </Pressable>
  );
};

const createStyles = (_theme: Theme) =>
  StyleSheet.create({
    container: { padding: 16 },
    tags: {
      display: 'flex',
      flexDirection: 'row',
    },
  });

const renderExercise: ListRenderItem<ExerciseWithMuscles> = props => (
  <ExerciseListRow {...props} />
);

export { ExerciseListRow, renderExercise };
