import {storage} from '@/utils/storage';
import create from 'zustand';
import {persist} from 'zustand/middleware';
import {immer} from 'zustand/middleware/immer';
import {authSlice} from './slices/auth';
import {AllSlices, Middleware} from './types';

export const useUser = create<AllSlices, Middleware>(
  persist(
    immer((...a) => ({
      ...authSlice(...a),
    })),
    {
      name: 'user-store',
      getStorage: () => storage,
      partialize: ({user}) => ({user}),
    },
  ),
);
