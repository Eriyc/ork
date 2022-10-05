import React, {FC} from 'react';
import {Button, SectionList, StyleSheet, View} from 'react-native';
import {useWorkoutStore} from '../../store';
import {ExerciseSetRow} from '../exercise-set-row';
import {ExerciseHeader} from './exercise-header';
import {WorkoutHeader} from './workout-header';

const renderHeader = () => <WorkoutHeader />;
const renderSectionHeader = ({section}) => <ExerciseHeader section={section} />;
const renderItem = data => {
  return <ExerciseSetRow {...data} />;
};

type AddSet = (id: string) => void;
type FooterProps = {
  addSet: AddSet;
};
const Footer = ({addSet}: FooterProps) => {
  return <Button title="Add exercise" onPress={() => addSet('pushup')} />;
};

const renderFooter = (addSet: AddSet) => <Footer addSet={addSet} />;

const ExerciseList: FC<{}> = ({}) => {
  const sections = useWorkoutStore(s => s.exercises);
  const addSet = useWorkoutStore(s => s.addSet);

  return (
    <SectionList
      sections={sections}
      contentContainerStyle={styles.col}
      stickySectionHeadersEnabled={false}
      renderItem={renderItem}
      ListHeaderComponent={renderHeader}
      ListFooterComponent={() => renderFooter(addSet)}
      renderSectionHeader={renderSectionHeader}
    />
  );
};

const styles = StyleSheet.create({
  col: {
    flexGrow: 1,
    padding: 16,
  },
});

export {ExerciseList};
