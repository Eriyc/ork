import {sections as defaultSections} from '@/data';
import {storage} from '@/utils/storage';
import {nanoid} from 'nanoid';
import {
  SavedSet,
  SavedWorkout,
  SavedWorkoutSection,
  WorkoutState,
} from '../types';

export const timerSlice: WorkoutState<'TimerSlice'> = (set, get) => ({
  times: [],
  workoutStatus: 'paused',

  startTime: () => get().times[0],

  toggleTimer: () => {
    set(state => {
      state.times.push(new Date());

      state.workoutStatus = state.times.length % 2 === 0 ? 'paused' : 'working';
    });
  },
  endWorkout: () => {
    set(state => {
      state.workoutStatus = 'ended';
      state.times.push(new Date());

      // TODO: Migrate to database

      // give workout an id
      const workoutId = nanoid();

      const sections: SavedWorkoutSection[] = state.sections.map(
        ({data: _, ...section}) => ({
          ...section,
          workoutId: workoutId,
        }),
      );
      updateStorage('user_id#sections', sections);

      const sets = state.sections.flatMap(section =>
        section.data.map<SavedSet>(setData => ({
          ...setData,
          sectionId: section.id,
        })),
      );
      console.log(sets);

      updateStorage('user_id#sets', sets);

      const newWorkout: SavedWorkout = {
        id: workoutId,
        times: state.times.map(date => date.toISOString()),
        title: 'Workout',
      };
      updateStorage('user_id#workouts', [newWorkout]);

      state.times = [];
      state.sections = defaultSections;
    });
  },
});

const updateStorage = (path: string, items: any[]) => {
  const savedItemsString = storage.getItem(path);
  const savedItems: any[] = savedItemsString
    ? JSON.parse(savedItemsString)
    : [];

  savedItems.push(...items);
  const itemsString = JSON.stringify(savedItems);
  storage.setItem(path, itemsString);
};
