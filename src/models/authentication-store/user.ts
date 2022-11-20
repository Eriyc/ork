import client from '@/utils/client';
import {flow, Instance, SnapshotOut, types} from 'mobx-state-tree';

export type AccountData = {
  user: {
    id: string;
    email: string;
    enabled: true;
  };
  profile: {
    displayname: string;
    avatar: string;
  };
};

export const fetchUserData = async (id: string): Promise<AccountData> => {
  const {data: user} = await client.from('accounts').select('*').single();
  const {data: profile} = await client.from('profiles').select('*').eq('id', id).single();

  return {user, profile};
};

export const UserModel = types
  .model('User')
  .props({
    id: types.string,
    displayname: types.optional(types.string, ''),
    email: types.optional(types.string, ''),
    avatar: types.maybe(types.string),
  })
  .actions(self => ({
    fetchData: flow(function* () {
      const {profile, user}: AccountData = yield fetchUserData(self.id);
      self.avatar = profile.avatar;
      self.displayname = profile.displayname;
      self.email = user.email;
    }),
  }));

type UserType = Instance<typeof UserModel>;
export interface User extends UserType {}
type UserSnapshotType = SnapshotOut<typeof UserModel>;
export interface UserSnapshot extends UserSnapshotType {}
