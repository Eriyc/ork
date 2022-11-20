import {exercises} from '@/data';
import {Set, useWorkout, WorkoutSection} from '@/stores';
import React, {FC, useMemo, useState} from 'react';
import {StyleSheet, SectionListData, View} from 'react-native';
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
      <View style={[styles.row, styles.info]}>
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
          />
        </Menu>
      </View>
      <View style={[styles.row]}>
        <Text
          variant="labelLarge"
          style={[styles.header, styles.smallHeader]}
          allowFontScaling={false}>
          Set
        </Text>
        <Text
          variant="labelLarge"
          style={[styles.header, styles.bigHeader]}
          allowFontScaling={false}>
          Previous
        </Text>
        <Text
          variant="labelLarge"
          style={[styles.header, styles.bigHeader]}
          allowFontScaling={false}>
          Weight (kg)
        </Text>
        <Text
          variant="labelLarge"
          style={[styles.header, styles.bigHeader]}
          allowFontScaling={false}>
          Reps
        </Text>
        <View style={[styles.smallHeader]} />
      </View>
    </Surface>
  );
};

const styles = StyleSheet.create({
  menuItem: {},
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  info: {
    paddingBottom: 8,
  },
  container: {
    marginHorizontal: 4,
    padding: 8,
    borderTopLeftRadius: 4,
    borderTopRightRadius: 4,
  },
  header: {textTransform: 'uppercase'},
  bigHeader: {
    flex: 2,
    marginHorizontal: 4,
    textAlign: 'center',
  },
  smallHeader: {
    flex: 0.8,
    textAlign: 'center',
  },
});

const renderExerciseHeader = ({section}: SetRowProps) => (
  <WorkoutExerciseHeader section={section} key={section.id} />
);

export {WorkoutExerciseHeader, renderExerciseHeader};
