import client from '@/utils/client';

export const signOut = async () => {
  const {error} = await client.auth.signOut();
  console.log(error);
};
