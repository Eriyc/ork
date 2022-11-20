import {Instance, SnapshotOut, types} from 'mobx-state-tree';

const WorkoutStoreModel = types.model('WorkoutStore').props({});

type WorkoutStoreType = Instance<typeof WorkoutStoreModel>;
export interface WorkoutStore extends WorkoutStoreType {}
type WorkoutStoreSnapshotType = SnapshotOut<typeof WorkoutStoreModel>;
export interface WorkoutStoreSnapshot extends WorkoutStoreSnapshotType {}
