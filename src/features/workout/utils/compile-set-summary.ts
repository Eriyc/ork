import {Set} from '../types';

export const compileSetSummary = (setMap: Record<string, Set[]>) => {
  console.log(setMap);

  const exercises = Object.values(setMap).map(sets => ({
    label: `${sets.length} × ${sets[0].exercise.name}`,
    exercise_id: sets[0].exercise_id,
  }));
  return exercises;
};
