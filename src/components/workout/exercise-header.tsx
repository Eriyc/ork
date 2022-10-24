import {exercises} from '@/data';
import {Set, useWorkout, WorkoutSection} from '@/stores';
import React, {FC, useMemo, useState} from 'react';
import {StyleSheet, SectionListData} from 'react-native';
import {IconButton, Menu, Surface, Text} from 'react-native-paper';

type SetRowProps = {
  section: SectionListData<Set, WorkoutSection>;
};

const WorkoutExerciseHeader: FC<SetRowProps> = ({section}) => {
  const removeSection = useWorkout(state => state.removeSection);
  const exercise = useMemo(
    () => exercises.find(e => e.id === section.exerciseId),
    [section.exerciseId],
  )!;

  const [visible, setVisible] = useState(false);
  const openMenu = () => setVisible(true);
  const closeMenu = () => setVisible(false);

  return (
    <Surface style={[styles.container]}>
      <Text variant="titleSmall">{exercise.title}</Text>
      <Menu
        anchor={<IconButton icon="dots-vertical" onPress={openMenu} />}
        onDismiss={closeMenu}
        visible={visible}>
        <Menu.Item
          style={styles.menuItem}
          leadingIcon="delete"
          title="Remove"
          onPress={() => removeSection(section.id)}
          dense
        />
      </Menu>
    </Surface>
  );
};

const styles = StyleSheet.create({
  menuItem: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 4,
    padding: 8,
    borderTopLeftRadius: 4,
    borderTopRightRadius: 4,
  },
});

const renderExerciseHeader = ({section}: SetRowProps) => (
  <WorkoutExerciseHeader section={section} />
);

export {WorkoutExerciseHeader, renderExerciseHeader};
