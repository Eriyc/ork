import React, { FC, useMemo } from 'react';
import { StyleSheet } from 'react-native';
import { useTranslation } from 'react-i18next';
import { Theme, useTheme } from '@/themes';
import {
  Label,
  Layout,
  MusclesInformationComponent,
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
      <MusclesInformationComponent muscles={exercise.muscles} />
    </Layout>
  );
};

const createStyles = (theme: Theme) =>
  StyleSheet.create({
    container: {},
  });

export { ExerciseDetailsScreen };
