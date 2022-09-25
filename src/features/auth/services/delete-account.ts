import client from '@/utils/client';

export const deleteAccount = async () => {
  // can only delete signed in users account by design

  await client.rpc('delete_own_account');
};
