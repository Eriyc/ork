import React, { FC, useMemo } from 'react';
import { StyleSheet } from 'react-native';
import { useTranslation } from 'react-i18next';
import { Theme, useTheme } from '@/themes';
import {
  Label,
  Layout,
  ScreenHeaderComponent,
  SpacingComponent,
  Text,
} from '@/components';

import { useAppRoute } from '@/navigators/app-navigator';
import { useExercise } from '@/hooks/use-exercise';

const ExerciseDetailsScreen: FC = () => {
  const { t } = useTranslation();
  const { theme } = useTheme();
  const styles = useMemo(() => createStyles(theme), [theme]);

  const route = useAppRoute<'ExerciseDetails'>();
  const { id } = route.params;

  const { exercise } = useExercise(id);
  if (!exercise) return <Layout />;

  return (
    <Layout>
      <ScreenHeaderComponent title={exercise.label} />
      <SpacingComponent>
        <Text>{exercise.description}</Text>
      </SpacingComponent>
      <SpacingComponent>
        <Text>Targets</Text>
        {exercise.muscles
          .filter(m => m.role === 'target')
          .map(muscle => (
            <Label key={muscle.id + muscle.role}>
              {muscle.name} {muscle.heads?.join(', ')}
            </Label>
          ))}
        <SpacingComponent sides={['top']} />
        <Text>Synergists</Text>
        {exercise.muscles
          .filter(m => m.role === 'synergist')
          .map(muscle => (
            <Label key={muscle.id + muscle.role}>
              {muscle.name} {muscle.heads?.join(', ')}
            </Label>
          ))}
      </SpacingComponent>
    </Layout>
  );
};

const createStyles = (theme: Theme) =>
  StyleSheet.create({
    container: {},
  });

export { ExerciseDetailsScreen };
