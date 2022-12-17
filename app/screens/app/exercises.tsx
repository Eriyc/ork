import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';
import {
  ExerciseListComponent,
  Layout,
  ScreenHeaderComponent,
} from '@/components';
import { useExercises } from '@/contexts/exercise-context';

const ExercisesScreen: FC = () => {
  const { t } = useTranslation();
  const { exercises } = useExercises();

  return (
    <Layout>
      <ScreenHeaderComponent title={t('common:exercises')} />
      <ExerciseListComponent exercises={exercises} />
    </Layout>
  );
};

export { ExercisesScreen };
