import {AuthState} from '../types';

export const authSlice: AuthState<'AuthSlice'> = (_set, _get) => ({
  status: 'waiting',
  user: null,
});
