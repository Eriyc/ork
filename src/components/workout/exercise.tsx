import {Section} from '@/models/workout-store/section';
import {observer} from 'mobx-react-lite';
import React, {FC, useState} from 'react';
import {StyleSheet, View, ListRenderItemInfo} from 'react-native';
import {Button, IconButton, Menu, Surface, Text} from 'react-native-paper';
import {WorkoutSetRow} from './set-row';

type ExerciseProps = ListRenderItemInfo<Section> & {};

const Header = () => {
  return (
    <View style={[styles.row]}>
      <Text variant="labelLarge" style={[styles.header, styles.smallHeader]} allowFontScaling={false}>
        Set
      </Text>
      <Text variant="labelLarge" style={[styles.header, styles.bigHeader]} allowFontScaling={false}>
        Previous
      </Text>
      <Text variant="labelLarge" style={[styles.header, styles.bigHeader]} allowFontScaling={false}>
        Weight (kg)
      </Text>
      <Text variant="labelLarge" style={[styles.header, styles.bigHeader]} allowFontScaling={false}>
        Reps
      </Text>
      <View style={[styles.smallHeader]} />
    </View>
  );
};

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
            <Menu.Item style={styles.menuItem} leadingIcon="delete" title="Remove" onPress={() => null} />
          </Menu>
        </View>
        <Header />
      </Surface>
      <View>
        {item.sets.map((set, index) => (
          <WorkoutSetRow set={set} index={index} key={set.id} />
        ))}
      </View>
      <Button onPress={item.addSet}>Add set</Button>
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

const renderExerciseComponent = (props: ExerciseProps) => <WorkoutExerciseComponent {...props} />;

export {WorkoutExerciseComponent, renderExerciseComponent};
