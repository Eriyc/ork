import {Set, WorkoutSection} from '@/stores';
import React, {FC} from 'react';
import {View, StyleSheet, SectionListRenderItem} from 'react-native';
import {Text} from 'react-native-paper';

type SetRowProps = {
  set: Set;
};

const WorkoutSetRow: FC<SetRowProps> = ({set}) => {
  return (
    <View style={[styles.container]}>
      <Text>vikt: {set.weight}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
});

const renderSetRow: SectionListRenderItem<Set, WorkoutSection> = ({item}) => (
  <WorkoutSetRow set={item} />
);

export {WorkoutSetRow, renderSetRow};
