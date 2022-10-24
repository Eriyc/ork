import {useWorkout} from '@/stores';
import React, {FC} from 'react';
import {View, StyleSheet, SectionList} from 'react-native';
import {Button, Text} from 'react-native-paper';
import {renderExerciseHeader} from './exercise-header';
import {renderSetRow} from './set-row';

const WorkoutSectionList: FC = () => {
  const sections = useWorkout(state => state.sections);
  const addSet = useWorkout(state => state.addSetToSection);

  return (
    <View style={[styles.container]}>
      <Text>Exercises</Text>
      <SectionList
        style={styles.container}
        sections={sections}
        renderItem={renderSetRow}
        stickySectionHeadersEnabled={false}
        renderSectionHeader={renderExerciseHeader}
        renderSectionFooter={({section}) => (
          <Button
            onPress={() => addSet(section.id, section.data.length, 'normal')}>
            Add new set
          </Button>
        )}
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
