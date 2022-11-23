import {openInAuthBrowser, Provider, Tokens} from '@/utils/auth-browser';
import client from '@/utils/client';
import {storage} from '@/utils/storage';
import {AuthResponse} from '@supabase/supabase-js';
import {flow, Instance, SnapshotOut, types} from 'mobx-state-tree';
import {StatusType, withStatus} from '../utils';
import {AccountData, fetchUserData, UserModel} from './user';

export const AuthenticationStoreModel = types
  .model('AuthenticationStore')
  .extend(() => withStatus('not_initialized'))
  .props({
    isAuthenticated: types.optional(types.boolean, false),
    user: types.maybeNull(UserModel),
  })
  .actions(self => ({
    setAuthenticated: (value: boolean) => {
      self.isAuthenticated = value;
    },
  }))
  .actions(self => ({
    afterCreate() {
      self.user?.fetchData();
    },

    signIn: flow(function* (provider: Provider) {
      self.setStatus('pending');

      let status: StatusType = 'error';
      let auth = false;

      const token: Tokens = yield openInAuthBrowser(provider);

      if (token) {
        const result: AuthResponse = yield client.auth.setSession({refresh_token: token.refresh_token} as any);

        if (result.data) {
          const userId: string = result.data.user!.id;
          const {profile, user}: AccountData = yield fetchUserData(userId);

          const userModel = UserModel.create({
            id: userId,
            email: user.email,
            displayname: profile.displayname,
            avatar: profile.avatar,
          });

          self.user = userModel;

          status = 'done';
          auth = true;

          storage.setItem('@user', JSON.stringify(userModel));
        }
      }

      self.setStatus(status);
      self.setAuthenticated(auth);
    }),
    signOut: flow(function* () {
      self.setStatus('pending');

      yield client.auth.signOut();

      self.setStatus('done');
      self.setAuthenticated(false);
    }),
  }));

type AuthenticationStoreType = Instance<typeof AuthenticationStoreModel>;
export interface AuthenticationStore extends AuthenticationStoreType {}
type AuthenticationStoreSnapshotType = SnapshotOut<typeof AuthenticationStoreModel>;
export interface AuthenticationStoreSnapshot extends AuthenticationStoreSnapshotType {}

export const createAuthenticationStoreDefaultModel = () => {
  const userString = storage.getItem('@user');
  const userObj = userString ? JSON.parse(userString) : undefined;
  const user = userObj ? UserModel.create(userObj) : null;

  if (user) {
    // hydrate user with data from database on fresh start
    client.auth.initialize().then(user.fetchData);
  }
  const store = AuthenticationStoreModel.create({
    isAuthenticated: !!user,
    user,
  });

  store.setStatus('idle');
  return store;
};
