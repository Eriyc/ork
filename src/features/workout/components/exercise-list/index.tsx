import React, {FC} from 'react';
import {
  Button,
  SectionList,
  SectionListData,
  SectionListRenderItem,
  StyleSheet,
} from 'react-native';

import {useWorkoutStore, WorkoutData} from '../../store';
import {ExerciseSetRow} from '../exercise-set-row';

import {ExerciseHeader} from './section-header';
import {WorkoutHeader} from './list-header';
import {ExerciseSetData} from '../../store/types';

const renderHeader = () => <WorkoutHeader />;

const renderSectionHeader = ({
  section,
}: {
  section: SectionListData<ExerciseSetData, WorkoutData>;
}) => <ExerciseHeader section={section} />;

const renderItem: SectionListRenderItem<
  ExerciseSetData,
  WorkoutData
> = data => {
  const number = data.section.data
    .slice(0, data.index + 1)
    .reduce((acc, curr) => (acc += curr.type !== 'warmup' ? 1 : 0), 0);

  return <ExerciseSetRow {...data} setNumber={number} key={data.item.id} />;
};

type AddSet = (id: string) => void;
type FooterProps = {
  addSet: AddSet;
};
const Footer = ({addSet}: FooterProps) => {
  return (
    <Button
      title="Add exercise"
      onPress={() => {
        addSet('pushup');
        addSet('pushup-extreme');
      }}
    />
  );
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
