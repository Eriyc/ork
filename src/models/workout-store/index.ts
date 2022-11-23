import {Instance, SnapshotOut, types} from 'mobx-state-tree';
import {SectionModel} from './section';
import {SetModel} from './set';

export const WorkoutStoreModel = types
  .model('WorkoutStore')
  .props({
    sections: types.optional(types.array(SectionModel), []),
  })
  .actions(self => ({
    addSection: (exerciseId: number) => {
      self.sections.push(SectionModel.create({exerciseId, sets: [SetModel.create()]}));
    },
    removeSection: (sectionId: string) => {
      const section = self.sections.find(s => s.id === sectionId);
      if (section) self.sections.remove(section);
    },
    cancel: () => {
      self.sections.replace([]);
    },
  }));

type WorkoutStoreType = Instance<typeof WorkoutStoreModel>;
export interface WorkoutStore extends WorkoutStoreType {}
type WorkoutStoreSnapshotType = SnapshotOut<typeof WorkoutStoreModel>;
export interface WorkoutStoreSnapshot extends WorkoutStoreSnapshotType {}

export const createWorkoutStoreDefaultModel = () => {
  return WorkoutStoreModel.create({sections: []});
};
