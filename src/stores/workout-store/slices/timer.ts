import {sections} from '@/data';
import {storage} from '@/utils/storage';
import {WorkoutState} from '../types';

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
    if (get().times.length % 2 === 1) {
      set(state => {
        state.workoutStatus = 'ended';
        state.times.push(new Date());

        // TODO: Migrate to database
        const savedWorkoutsString = storage.getItem('workouts');
        const savedWorkouts: any[] = savedWorkoutsString
          ? JSON.parse(savedWorkoutsString)
          : [];

        const newWorkout = {
          times: state.times,
          sections: state.sections,
          title: 'Workout',
        };

        savedWorkouts.push(newWorkout);

        storage.setItem('workouts', JSON.stringify(savedWorkouts));

        state.times = [];
        state.sections = sections;
      });
    }
  },
});
