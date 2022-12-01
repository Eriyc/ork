import {FetchWorkoutData} from '@/models/workout-store';

export const calculateTotalVolume = (workout: FetchWorkoutData) => {
  return workout.sections.reduce(
    (volume, section) => volume + section.sets.reduce((acc, set) => acc + (set.reps ?? 0) * (set.weight ?? 0), 0),
    0,
  );
};
