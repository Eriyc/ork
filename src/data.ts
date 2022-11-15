import {nanoid} from 'nanoid';
import {WorkoutSection} from './stores';

export type Muscle = {
  name: string;
  group: string;
  heads?: string[];
};

export type Exercise = {
  id: number;
  title: string;
  image: string;
  description: string;
  groups: string[];
  muscles: (string | [string, string])[];
};

// https://exrx.net/Lists/Muscle
export const muscles: Muscle[] = [
  {
    name: 'pectoralis-major',
    group: 'chest',
    heads: ['clavicular', 'sternal'],
  },
  {name: 'pectoralis-minor', group: 'chest'},
  {name: 'triceps', group: 'arms', heads: ['long', 'lateral', 'medial']},
  {name: 'biceps', group: 'arms', heads: ['long', 'short']},
  {
    name: 'deltoids',
    group: 'shoulders',
    heads: ['anterior', 'lateral', 'posterior'],
  },
];

export const exercises: Exercise[] = [
  {
    id: 1,
    title: 'Pushup',
    image: '',
    description: '',
    groups: ['chest'],
    muscles: ['pectoralis-major', 'pectoralis-minor', ['deltoids', 'anterior']],
  },
  {
    id: 2,
    title: 'Tricep dips',
    image: '',
    description: '',
    groups: ['arms'],
    muscles: ['triceps'],
  },
  {
    id: 3,
    title: 'Chest dips',
    image: '',
    description: '',
    groups: ['chest'],
    muscles: [['pectoralis-major', 'sternal']],
  },
];

export const sections: WorkoutSection[] = [
  {
    data: [
      {
        weight: {value: undefined, placeholder: undefined},
        reps: {value: undefined, placeholder: undefined},
        id: nanoid(),
      },
    ],
    exerciseId: 1,
    id: nanoid(),
    unit: 'kg',
  },
];
