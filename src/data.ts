type Muscle = {
  name: string;
  group: string;
  heads?: string[];
};

export const muscles: Muscle[] = [
  {name: 'pectoralis-major', group: 'chest'},
  {name: 'pectoralis-minor', group: 'chest'},
  {name: 'triceps', group: 'arms', heads: ['long', 'lateral', 'medial']},
  {name: 'biceps', group: 'arms', heads: ['long', 'short']},
  {
    name: 'deltoids',
    group: 'shoulders',
    heads: ['anterior', 'lateral', 'posterior'],
  },
];

type Exercise = {
  id: number;
  title: string;
  image: string;
  description: string;
  groups: string[];
  muscles: (string | [string, string])[];
};

export const exercises: Exercise[] = [
  {
    id: 1,
    title: 'Pushup',
    image: '',
    description: '',
    groups: ['chest', 'arms'],
    muscles: ['pectoralis-major', 'pectoralis-minor', ['deltoids', 'anterior']],
  },
];
