import {AllSlices, WorkoutSlice} from '../types';
import produce from 'immer';
import {nanoid} from 'nanoid';

export const createExercisesSlice: WorkoutSlice<'ExercisesSlice'> = set => ({
  exercises: [
    {
      id: 'pushup',
      weightType: 'assisted',
      weightUnit: 'kg',
      data: [nanoid(), nanoid()],
    },
  ],
  addSet: exerciseId =>
    set(
      produce<AllSlices>(s => {
        s.exercises.find(e => e.id === exerciseId)?.data.push(nanoid());
      }),
    ),
});
