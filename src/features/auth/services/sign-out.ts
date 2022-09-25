import client from '@/utils/client';

export const signOut = async () => {
  await client.auth.signOut();
};
