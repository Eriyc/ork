import React, { FC, useMemo } from 'react';
import { StyleSheet } from 'react-native';
import { useTranslation } from 'react-i18next';
import { Theme, useTheme } from '@/themes';
import { ExerciseWithMuscles } from '@/queries/exercises';
import { Text } from '../atoms/text';
import { Label } from '../atoms/label';
import { SpacingComponent } from '../atoms/spacing';
import { Surface } from '../atoms/surface';

type MusclesInformationProps = {
  muscles: ExerciseWithMuscles['muscles'];
};

const MusclesInformationComponent: FC<MusclesInformationProps> = ({
  muscles,
}) => {
  const { t } = useTranslation();
  const { theme } = useTheme();
  const styles = useMemo(() => createStyles(theme), [theme]);

  const targets = useMemo(
    () => muscles.filter(m => m.role === 'target'),
    [muscles],
  );
  const synergists = useMemo(
    () => muscles.filter(m => m.role === 'synergist'),
    [muscles],
  );

  return (
    <Surface style={[styles.container]}>
      <Text>Muscles used</Text>
      <Text>Targets</Text>
      {targets.map(muscle => (
        <Label key={muscle.id + muscle.role}>
          {muscle.name} {muscle.heads?.join(', ')}
        </Label>
      ))}
      <SpacingComponent sides={['top']} />
      <Text>Synergists</Text>
      {synergists.map(muscle => (
        <Label key={muscle.id + muscle.role}>
          {muscle.name} {muscle.heads?.join(', ')}
        </Label>
      ))}
    </Surface>
  );
};

const createStyles = (theme: Theme) =>
  StyleSheet.create({
    container: {
      padding: 16,
      margin: 16,
    },
  });

export { MusclesInformationComponent };
