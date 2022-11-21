import {Exercise, exercises} from '@/data';
import {Instance, SnapshotOut, types} from 'mobx-state-tree';
import {nanoid} from 'nanoid';
import {SetModel} from './set';

export const SectionModel = types
  .model('Section')
  .props({
    id: types.optional(types.identifier, nanoid),
    exerciseId: types.number,
    sets: types.optional(types.array(SetModel), []),
  })
  .views(self => ({
    get exercise(): Exercise {
      return exercises.find(e => e.id === self.exerciseId)!;
    },
  }))
  .actions(self => ({
    addSet: () => {
      const newSet = SetModel.create({});
      self.sets.push(newSet);
    },
    removeSet: (id: string) => {
      const set = self.sets.find(s => s.id === id);
      if (set) {
        self.sets.remove(set);
      }
    },
  }));

type SectionType = Instance<typeof SectionModel>;
export interface Section extends SectionType {}
type SectionSnapshotType = SnapshotOut<typeof SectionModel>;
export interface SectionSnapshot extends SectionSnapshotType {}
