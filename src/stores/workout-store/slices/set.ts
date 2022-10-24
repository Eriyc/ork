import {nanoid} from 'nanoid';
import {exercises, sections} from '@/data';
import {WorkoutState} from '../types';

export const setSlice: WorkoutState<'SetSlice'> = (set, get) => ({
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
  addSetToSection: (sectionId, index, type) => {
    const previousSet = get().sections.find(section => section.id === sectionId)
      ?.data[0];

    set(state => {
      const sectionIndex = state.sections.findIndex(
        section => section.id === sectionId,
      );

      state.sections[sectionIndex].data.push(previousSet ?? {weight: 10});
    });
  },
  removeSection: setId =>
    set(state => {
      state.sections = state.sections.filter(section => section.id !== setId);
    }),
});
