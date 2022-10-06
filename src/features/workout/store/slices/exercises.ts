import {AllSlices, ExerciseSetData, WorkoutSlice} from '../types';
import produce from 'immer';
import {nanoid} from 'nanoid';

export const createExercisesSlice: WorkoutSlice<'ExercisesSlice'> = set => ({
  exercises: [],
  addSet: exerciseId =>
    set(
      produce<AllSlices>(s => {
        const exercise = s.exercises.findIndex(e => e.id === exerciseId);

        const newSet: ExerciseSetData = {
          previous: {reps: 10, weight: 10, unit: 'kg'},
          reps: {isPlaceholder: false},
          weight: {isPlaceholder: false},
          type: 'default',
          id: nanoid(),
          completed: false,
        };

        if (exercise === -1) {
          s.exercises.push({
            data: [newSet],
            id: exerciseId,
            weightType: 'normal',
            weightUnit: 'kg',
          });
        } else {
          s.exercises[exercise].data.push(newSet);
        }
      }),
    ),
  updateSet: (exerciseId, setId, data, placeholder = false) =>
    set(
      produce<AllSlices>(state => {
        const exercise = state.exercises.find(e => e.id === exerciseId);

        if (!exercise) {
          return;
        }

        const item = exercise.data.find(s => s.id === setId);

        if (!item) {
          return;
        }

        if (data.weight) {
          item.weight = {
            value: data.weight,
            isPlaceholder: placeholder,
          };
        }
        if (data.reps) {
          item.reps = {
            value: data.reps,
            isPlaceholder: placeholder,
          };
        }
        if (data.rpe) {
          item.rpe = data.rpe;
        }

        if (data.type) {
          item.type = data.type;
        }
      }),
    ),
  removeSet: (exerciseId, setId) =>
    set(
      produce<AllSlices>(state => {
        const item = state.exercises.find(e => e.id === exerciseId);

        if (item) {
          item.data = item.data.filter(s => s.id !== setId);
          if (item.data.length === 0) {
            state.exercises = state.exercises.filter(e => e.id !== exerciseId);
          }
        }
      }),
    ),
  removeExercise: exerciseId =>
    set(
      produce<AllSlices>(state => {
        state.exercises = state.exercises.filter(e => e.id !== exerciseId);
      }),
    ),

  toggleExercise: (exerciseId, setId) =>
    set(
      produce<AllSlices>(state => {
        const exercise = state.exercises.find(e => e.id === exerciseId);
        if (!exercise) {
          return;
        }

        const item = exercise.data.find(s => s.id === setId);

        if (!item) {
          return;
        }

        item.completed = !item.completed;
      }),
    ),
});
