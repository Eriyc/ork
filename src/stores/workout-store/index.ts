import create from 'zustand';
import {immer} from 'zustand/middleware/immer';
import {persist, devtools} from 'zustand/middleware';
import {setSlice} from './slices/set';
import {timerSlice} from './slices/timer';
import {AllSlices} from './types';
import {storage} from '@/utils/storage';

export const useWorkout = create<AllSlices>()(
  persist(
    immer(
      devtools((...a) => ({
        ...timerSlice(...a),
        ...setSlice(...a),
      })),
    ),
    {
      name: 'workout-storage',
      partialize: ({times, workoutStatus, sections}) => ({
        times,
        workoutStatus,
        sections,
      }),
      getStorage: () => storage,
      serialize: JSON.stringify,
      version: 1,
      deserialize: s => {
        const parsed = JSON.parse(s);
        const state = parsed.state;

        const times = state.times.map((time: string) => new Date(time));

        return {
          ...parsed,
          state: {
            ...state,
            times,
          },
        };
      },
    },
  ),
);

export * from './types';
