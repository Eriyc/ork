import {useMainNavigation} from '@/navigation';
import {useWorkout} from '@/stores';
import React, {FC} from 'react';
import {View, StyleSheet, SectionList} from 'react-native';
import {Button, Text} from 'react-native-paper';
import {renderExerciseHeader} from './exercise-header';
import {renderSetRow} from './set-row';

const WorkoutSectionList: FC = () => {
  const sections = useWorkout(state => state.sections);
  const addSet = useWorkout(state => state.addSetToSection);

  const navigation = useMainNavigation();

  return (
    <View style={[styles.container]}>
      <Text>Exercises</Text>
      <SectionList
        style={styles.container}
        sections={sections}
        renderItem={renderSetRow}
        keyExtractor={({id}) => id}
        stickySectionHeadersEnabled={false}
        renderSectionHeader={renderExerciseHeader}
        ListFooterComponent={
          <Button
            onPress={() =>
              navigation.navigate('exercisePicker', {
                returnTo: 'templates',
              })
            }>
            Add exercise
          </Button>
        }
        renderSectionFooter={({section}) => (
          <View style={styles.sectionFooter}>
            <Button
              onPress={() => addSet(section.id, section.data.length, 'normal')}>
              Add new set
            </Button>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
  },
  sectionFooter: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
});

export {WorkoutSectionList};
