import {WorkoutSlice} from '../types';

export const createExercisesSlice: WorkoutSlice<'ExercisesSlice'> = (
  set,
  get,
) => ({
  exercises: {
    pushup: {
      id: 'pushup',

      weightType: 'normal',
      weightUnit: 'kg',

      data: [
        {
          type: 'default',
          previous: {weight: 0, reps: 10},
          rpe: undefined,
          weight: {isPlaceholder: false, value: undefined},
          reps: {isPlaceholder: false, value: undefined},
        },
      ],
    },
  },
  addSet: exerciseId => {},
  removeSet: (exerciseId, index) => {},
  updateSet: () => {},
});
