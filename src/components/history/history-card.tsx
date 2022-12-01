import {WeightType} from '@/db-types';
import {FetchWorkoutData} from '@/models/workout-store';
import {from_now} from '@/utils';
import {calculateTotalVolume} from '@/utils/workout';
import React, {FC, memo, useMemo} from 'react';
import {StyleSheet, View} from 'react-native';
import {Avatar, MD3Theme, Surface, Text, useTheme} from 'react-native-paper';

type HistoryCardComponentProps = {
  workout: FetchWorkoutData;
};

const HistoryCardComponent: FC<HistoryCardComponentProps> = memo(({workout}) => {
  const theme = useTheme();
  const styles = useMemo(() => createStyles(theme), [theme]);
  const published = useMemo(() => from_now(workout.started_at), [workout.started_at]);
  const volume = useMemo(() => calculateTotalVolume(workout), [workout]);

  return (
    <Surface style={[styles.container]} key={workout.id}>
      <View style={styles.titleContainer}>
        <Text variant="bodyLarge" style={[styles.title]}>
          Workout title
        </Text>
        <Text>{published}</Text>
      </View>
      <Text>
        {volume} {WeightType.KG}
      </Text>
      <View style={[styles.author]}>
        {workout.creator.avatar ? (
          <Avatar.Image size={48} source={{uri: workout.creator.avatar}} />
        ) : (
          <Avatar.Text size={48} label={workout.creator.displayname[0]} />
        )}
        <Text style={[styles.authorLabel]}>{workout.creator.displayname}</Text>
      </View>
      <View>
        {workout.sections.map(section => (
          <Text key={section.workout_id + section.index}>
            {section.sets.length} sets of {section.exercise.name}
          </Text>
        ))}
      </View>
    </Surface>
  );
});

const createStyles = (theme: MD3Theme) =>
  StyleSheet.create({
    container: {
      padding: 15,
      borderRadius: theme.roundness * 2,
    },
    titleContainer: {
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    title: {
      fontWeight: '700',
    },
    author: {
      marginTop: 8,
      marginBottom: 16,
      flexDirection: 'row',
      alignItems: 'center',
    },
    authorLabel: {
      marginLeft: 16,
    },
  });

export {HistoryCardComponent};
