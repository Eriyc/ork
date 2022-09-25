type AuthContextData = {
  authData?: AuthData;
  loading: boolean;
  signIn(): Promise<void>;
  signOut(): void;
  deleteOwnAccount(): Promise<void>;
  signInWithProvider(provider: 'apple' | 'google'): Promise<void>;
};

interface Response {
  success: boolean;
}

interface AuthData extends Response {
  success: true;
  first_name: string;
  last_name: string;
  email: string;
  id: string;
}

interface AuthError extends Response {
  success: false;
  code: 401 | 404;
  message: string;
}

export type {AuthContextData, AuthData, AuthError};
export type Profile = {
  first_name: string;
  last_name: string;
};
