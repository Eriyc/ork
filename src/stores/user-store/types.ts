import {StateCreator} from 'zustand';

export type User = {
  id: string;
  name: string;
  email: string;
  subscription: 'free';
  xp: 10394;
};

export type AuthSlice = {
  status: 'waiting' | 'loading' | 'ready';
  user: User | null;
};

export type AllSlices = AuthSlice;

export type Middleware = [
  ['zustand/persist', unknown],
  ['zustand/immer', never],
];

type SliceMap = {
  AuthSlice: AuthSlice;
};

export type AuthState<T extends keyof SliceMap> = StateCreator<
  AllSlices,
  Middleware,
  [],
  SliceMap[T]
>;
