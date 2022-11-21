import {getParent, getParentOfType, Instance, SnapshotOut, types} from 'mobx-state-tree';
import {nanoid} from 'nanoid';
import {Section, SectionModel} from './section';

export const SetModel = types
  .model('Set')
  .props({
    id: types.optional(types.identifier, nanoid),
    completed: types.optional(types.boolean, false),
    weight: types.maybe(types.string),
    reps: types.maybe(types.number),
  })
  .views(self => ({
    get label(): string {
      const index = getParent<Section>(self, 2).sets.findIndex(set => set.id === self.id) + 1;
      return index.toString();
    },
  }))
  .actions(self => ({
    remove: () => {
      getParentOfType(self, SectionModel).removeSet(self.id);
    },
    setCompleted: (value: boolean) => {
      self.completed = value;
    },
    updateWeight: (value: string) => {
      self.weight = value;
    },
    updateReps: (value: number) => {
      self.reps = value;
    },
  }));

type SetType = Instance<typeof SetModel>;
export interface Set extends SetType {}
type SetSnapshotType = SnapshotOut<typeof SetModel>;
export interface SetSnapshot extends SetSnapshotType {}
