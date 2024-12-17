import { AuthCommand, AuthMethod } from "./commands/types";

// Base types
export interface AuthTokens {
  accessToken: string | null;
  refreshToken: string | null;
  accessTokenExpiration: number | null;
}

export interface AuthUser {
  id: string;
  email?: string;
  // Add other user fields as needed
}

// Auth state interface
export interface AuthState {
  tokens: AuthTokens;
  user: AuthUser | null;
  isAuthenticated: boolean;
  method: AuthMethod;

  reset: () => void;
}

export interface AuthExecutor {
  execute<T>(command: AuthCommand<T>, params: T): Promise<void>;
}
