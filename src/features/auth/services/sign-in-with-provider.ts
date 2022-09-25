import client from '@/utils/client';
import {SUPABASE_URL} from 'react-native-dotenv';
import {InAppBrowser} from 'react-native-inappbrowser-reborn';

interface Props {
  provider: 'apple' | 'google';
}
export const signInWithProvider = async ({provider}: Props) => {
  const url = `${SUPABASE_URL}/auth/v1/authorize?provider=${provider}&redirect_to=ork://callback`;

  if (await InAppBrowser.isAvailable()) {
    InAppBrowser.openAuth(url, 'ork://callback', {}).then(async response => {
      if (response.type === 'success') {
        const params = response.url.split('#')[1].split('&');
        const token = params
          .map(s => s.split('='))
          .find(([k]) => k === 'refresh_token')![1];

        await client.auth.setSession(token);
        await client.auth.initialize();
      }
    });
  }
};
