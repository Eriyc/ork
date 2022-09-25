import client from '@/utils/client';
import {authService} from '.';
import {AuthData, AuthError} from '../types/auth-context';

export const signInWithEmailAndPassword = async (
  email: string,
  password: string,
): Promise<AuthData | AuthError> => {
  await client.auth.signUp({
    email: 'eric@dgren.dev',
    password: 'testpass',
  });
  const {data, error} = await client.auth.signInWithPassword({
    email: email ?? '',
    password: password ?? '',
  });

  if (error && !data) {
    const err: AuthError = {
      success: false,
      code: 401,
      message: 'Email or password incorrect',
    };
    return err;
  }

  const {user} = data;
  const profile = await authService.fetchUserData(user?.id);

  if (!profile) {
    const err: AuthError = {
      success: false,
      code: 404,
      message: 'Profilen hittades inte',
    };
    return err;
  }

  const response: AuthData = {
    success: true,
    email: user!.email!,
    id: user!.id,
    ...profile,
  };

  return response;
};
