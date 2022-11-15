import {SUPABASE_URL} from 'react-native-dotenv';
import {InAppBrowser} from 'react-native-inappbrowser-reborn';

type Provider = 'apple' | 'google';

export const openInAuthBrowser = async (provider: Provider, scheme = 'ork') => {
  const url = `${SUPABASE_URL}/auth/v1/authorize?provider=${provider}&redirect_to=${scheme}://callback&scope=email`;

  if (await InAppBrowser.isAvailable()) {
    return await InAppBrowser.openAuth(url, 'ork://callback', {}).then(
      async response => {
        if (response.type === 'success') {
          const paramsList = new URL(response.url).hash
            .replace('#', '')
            .split('&')
            .map(param => param.split('='));

          const params: Record<string, string> = {};
          paramsList.forEach(param => {
            params[param[0]] = param[1];
          });

          return {
            access_token: params.access_token,
            refresh_token: params.refresh_token,
          };
        }
      },
    );
  }
};
