import {StateCreator} from 'zustand';

export type User = {
  id: string;
  provider: 'email' | 'apple' | 'google';

  name: string;
  email: string;
  subscription: 'free';
  xp: number;
};

export type AuthSlice = {
  status: 'waiting' | 'loading' | 'ready';
  user: User | null;

  hydrate: (online?: boolean) => Promise<void>;
  signInWithEmailAndPassword: (e: string, p: string) => void;
  signInWithProvider: (provider: 'google' | 'apple') => void;
  signOut: () => void;
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
