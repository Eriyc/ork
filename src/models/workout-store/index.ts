import {toJS} from 'mobx';
import {Instance, SnapshotOut, types} from 'mobx-state-tree';
import {SectionModel} from './section';
import {SetModel} from './set';

type ToDatabaseSet = {
  reps: number | null;
  weight: number | null;
};

type ToDatabaseSection = {
  exerciseId: number;
  sets: ToDatabaseSet[];
};

export const WorkoutStoreModel = types
  .model('WorkoutStore')
  .props({
    sections: types.optional(types.array(SectionModel), []),
    active: types.optional(types.boolean, true),
  })
  .actions(self => ({
    addSection: (exerciseId: number) => {
      self.active = true;
      self.sections.push(SectionModel.create({exerciseId, sets: [SetModel.create()]}));
    },
    removeSection: (sectionId: string) => {
      const section = self.sections.find(s => s.id === sectionId);
      if (section) self.sections.remove(section);
    },
    cancel: () => {
      self.sections.replace([]);
    },
    finish: () => {
      // self.active = false;

      const sections: ToDatabaseSection[] = toJS(self.sections).map(section => ({
        exerciseId: section.exerciseId,
        sets: section.sets.map<ToDatabaseSet>(set => ({
          reps: set.reps || null,
          weight: set.weight ? parseFloat(set.weight) : null,
        })),
      }));
      console.log(sections[0]);

      console.log('woohoo 🎉');
    },
  }));

type WorkoutStoreType = Instance<typeof WorkoutStoreModel>;
export interface WorkoutStore extends WorkoutStoreType {}
type WorkoutStoreSnapshotType = SnapshotOut<typeof WorkoutStoreModel>;
export interface WorkoutStoreSnapshot extends WorkoutStoreSnapshotType {}

export const createWorkoutStoreDefaultModel = () => {
  return WorkoutStoreModel.create({sections: []});
};
