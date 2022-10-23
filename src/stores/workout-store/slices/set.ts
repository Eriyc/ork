import {nanoid} from 'nanoid';
import {exercises, sections} from '@/data';
import {WorkoutState} from '../types';

export const setSlice: WorkoutState<'SetSlice'> = set => ({
  sections: sections,
  addSection: async exerciseId => {
    // preload exercise
    const exercise = exercises.find(e => e.id === exerciseId)!;

    set(state => {
      state.sections.push({
        exerciseId: exercise.id,
        id: nanoid(),
        unit: 'kg',
        data: [],
      });
    });
  },
  removeSection: setId =>
    set(state => {
      state.sections = state.sections.filter(section => section.id !== setId);
    }),
});
