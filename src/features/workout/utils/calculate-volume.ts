import {Set} from '../types';

export const calculateVolume = (set: Set) => set.repetitions * set.weigth;

export const calculateTotalVolume = (sets: Set[]) => {
  return sets.reduce((acc, set) => acc + calculateVolume(set), 0);
};
