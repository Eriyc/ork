export type SetType = 'normal' | 'failure' | 'warmup' | 'drop';

export class WorkoutSet {
  #localId: string;
  type: SetType = 'normal';
}
