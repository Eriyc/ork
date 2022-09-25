import client from '@/utils/client';
import {Profile} from '../types';

export const fetchUserData = async (id?: string): Promise<Profile | null> => {
  const user: string = id
    ? id
    : ((await client.auth.getUser()).data.user!.id as string);

  const {data} = await client
    .from('profiles')
    .select('first_name, last_name')
    .eq('id', user)
    .single();

  if (data) {
    return {
      first_name: data.first_name,
      last_name: data.last_name,
    };
  }
  return null;
};
