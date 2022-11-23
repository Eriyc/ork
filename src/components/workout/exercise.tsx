import {Section} from '@/models/workout-store/section';
import {observer} from 'mobx-react-lite';
import React, {FC, useState} from 'react';
import {StyleSheet, View, ListRenderItemInfo} from 'react-native';
import {Button, IconButton, Menu, Surface, Text} from 'react-native-paper';
import {ExerciseColumnsHeaderComponent} from './exercise-columns-header';
import {WorkoutSetRow} from './set-row';

export type ExerciseProps = ListRenderItemInfo<Section> & {};

const WorkoutExerciseComponent: FC<ExerciseProps> = observer(({item}) => {
  const [visible, setVisible] = useState(false);
  const openMenu = () => setVisible(true);
  const closeMenu = () => setVisible(false);

  return (
    <View>
      <Surface style={[styles.container]}>
        <View style={[styles.row, styles.info]}>
          <Text variant="titleSmall">{item.exercise.title}</Text>
          <Menu anchor={<IconButton icon="dots-vertical" onPress={openMenu} />} onDismiss={closeMenu} visible={visible}>
            <Menu.Item style={styles.menuItem} leadingIcon="delete" title="Remove" onPress={item.remove} />
          </Menu>
        </View>
        <ExerciseColumnsHeaderComponent />
      </Surface>
      <View>
        {item.sets.map((set, index) => (
          <WorkoutSetRow set={set} index={index} key={set.id} />
        ))}
      </View>
      <Button style={[styles.addSetButton]} onPress={item.addSet} mode="elevated">
        Add set
      </Button>
    </View>
  );
});

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
    padding: 8,
    borderTopLeftRadius: 4,
    borderTopRightRadius: 4,
  },
  addSetButton: {
    marginHorizontal: 16,
    marginVertical: 8,
  },
});

export {WorkoutExerciseComponent};
