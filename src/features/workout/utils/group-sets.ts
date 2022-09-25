import {Set} from '../types';

export const groupSets = (sets: Set[]) => {
  return sets.reduce<Record<string, Set[]>>((r, set) => {
    r[set.exercise_id] = r[set.exercise_id] || [];
    r[set.exercise_id].push(set);

    return r;
  }, Object.create(null));
};
