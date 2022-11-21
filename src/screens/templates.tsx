import {WorkoutListComponent} from '@/components';
import {useWorkoutStore} from '@/models';
import React, {FC} from 'react';
import {View, StyleSheet} from 'react-native';
import {observer} from 'mobx-react-lite';

const _TemplatesScreen: FC = () => {
  const workout = useWorkoutStore();

  return (
    <View style={[styles.container]}>
      <WorkoutListComponent workout={workout} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  row: {
    flexDirection: 'row',
  },
});

const TemplatesScreen = observer(_TemplatesScreen);

export {TemplatesScreen};
