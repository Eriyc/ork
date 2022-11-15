import client from '@/utils/client';
import {AuthState} from '../types';
import {openInAuthBrowser} from '../utils/auth-browser';

const fetchUserData = async () => {
  const {
    data: {user},
  } = await client.auth.getUser();

  const {data: profile} = await client
    .from('profiles')
    .select('*')
    .eq('id', user?.id)
    .single();

  return {user, profile};
};

export const authSlice: AuthState<'AuthSlice'> = (set, get) => ({
  status: 'waiting',
  user: null,

  hydrate: async (online = false) => {
    if (get().status === 'waiting') {
      // dont show loading screen if app is already running
      set(state => {
        state.status = 'loading';
      });
    }

    const {profile, user} = await fetchUserData();

    if (online) {
      if (user && profile) {
        set({
          user: {
            id: user.id,
            provider: user.app_metadata.provider as any,

            email: user.email!,
            name: profile.displayname,
            subscription: 'free',
            xp: 1000,
          },
        });
      }
    }

    set(state => {
      state.status = 'ready';
    });
  },

  signInWithEmailAndPassword: (_email, _password) => {
    set({
      user: {
        id: 'userid',
        provider: 'email',

        email: 'eric@dgren.dev',
        name: 'Eric',
        subscription: 'free',
        xp: 10394,
      },
    });
  },
  signInWithProvider: async provider => {
    const token = await openInAuthBrowser(provider);

    if (token) {
      const {
        data: {user},
      } = await client.auth.setSession({
        refresh_token: token.refresh_token,
      } as any);
      await client.auth.initialize();

      const {profile} = await fetchUserData();

      if (user && user) {
        set({
          user: {
            email: user.email!,
            provider: user.app_metadata.provider as any,

            id: user.id,
            name: profile.displayname,
            subscription: 'free',
            xp: 1000,
          },
        });
      }
    }
  },
  signOut: () => {
    client.auth.signOut();

    set({
      user: null,
    });
  },
});
