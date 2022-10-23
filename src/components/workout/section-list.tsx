import {useWorkout} from '@/stores';
import React, {FC} from 'react';
import {View, StyleSheet, SectionList} from 'react-native';
import {Text} from 'react-native-paper';
import {renderSetRow} from './set-row';

const WorkoutSectionList: FC = () => {
  const sections = useWorkout(state => state.sections);

  console.log(sections);

  return (
    <View style={[styles.container]}>
      <Text>Exercises</Text>
      <SectionList
        contentContainerStyle={styles.container}
        sections={sections}
        renderItem={renderSetRow}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
  },
});

export {WorkoutSectionList};
