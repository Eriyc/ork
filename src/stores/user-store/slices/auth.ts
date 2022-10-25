import {AuthState} from '../types';

export const authSlice: AuthState<'AuthSlice'> = (set, get) => ({
  status: 'waiting',
  user: null,
});
