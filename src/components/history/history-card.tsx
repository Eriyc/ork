import {Workout, WorkoutSection, WorkoutSectionSet} from '@/db-types';
import React, {FC, useMemo} from 'react';
import {StyleSheet, View} from 'react-native';
import {Avatar, MD3Theme, Surface, Text, useTheme} from 'react-native-paper';

interface WorkoutWithSections extends Workout {
  creator: {
    displayname: string;
    avatar?: string;
  };
  sections: (WorkoutSection & {
    sets: WorkoutSectionSet[];
  })[];
}

type HistoryCardComponentProps = {
  workout: WorkoutWithSections;
};

const HistoryCardComponent: FC<HistoryCardComponentProps> = ({workout}) => {
  const theme = useTheme();
  const styles = useMemo(() => createStyles(theme), [theme]);

  return (
    <Surface style={[styles.container]} key={workout.id}>
      <Text variant="bodyLarge" style={[styles.title]}>
        Workout title
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
          <Text key={section.id}>{section.sets.length} sets of (exercise)</Text>
        ))}
      </View>
    </Surface>
  );
};

const createStyles = (theme: MD3Theme) =>
  StyleSheet.create({
    container: {
      padding: 15,
      borderRadius: theme.roundness * 2,
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
