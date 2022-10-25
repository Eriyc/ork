import {Set, useWorkout, WorkoutSection} from '@/stores';
import React, {FC, memo, useMemo} from 'react';
import {StyleSheet, SectionListRenderItem} from 'react-native';
import {Swipeable} from 'react-native-gesture-handler';
import {
  MD3Theme,
  Surface,
  Text,
  TouchableRipple,
  useTheme,
} from 'react-native-paper';

type SetRowProps = {
  set: Set;
  index: number;
  sectionId: WorkoutSection['id'];
};

const RemoveButton = () => {
  const theme = useTheme();
  const styles = useMemo(() => createStyles(theme), [theme]);

  return (
    <TouchableRipple style={styles.removeButton}>
      <Text style={styles.removeText}>Remove</Text>
    </TouchableRipple>
  );
};
const renderRightActions = () => <RemoveButton />;

const WorkoutSetRow: FC<SetRowProps> = memo(
  ({set, index, sectionId}) => {
    const theme = useTheme();
    const styles = useMemo(() => createStyles(theme), [theme]);

    const removeSet = useWorkout(state => state.removeSet);

    const handleSwipe = (dir: 'left' | 'right') => {
      if (dir === 'right') {
        removeSet(sectionId, set.id);
      }
    };

    return (
      <Swipeable
        renderRightActions={renderRightActions}
        onSwipeableOpen={handleSwipe}>
        <Surface
          style={[styles.row, index % 2 === 1 && styles.evenRow]}
          elevation={0}>
          <Text>
            vikt: {set.weight} {set.id}
          </Text>
        </Surface>
      </Swipeable>
    );
  },
  (prev, next) => prev.index === next.index && prev.set.id === next.set.id,
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
    removeButton: {
      backgroundColor: theme.colors.error,
      flex: 1,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'flex-end',
      paddingHorizontal: 8,
    },
    removeText: {
      color: theme.colors.onError,
    },
  });

const renderSetRow: SectionListRenderItem<Set, WorkoutSection> = ({
  item,
  index,
  section,
}) => <WorkoutSetRow set={item} index={index} sectionId={section.id} />;

export {WorkoutSetRow, renderSetRow};
