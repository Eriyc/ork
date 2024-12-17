import { observable } from "@legendapp/state";

import { AuthMethod } from "./commands/types";
import { AuthState } from "./types";

const initialState: Omit<AuthState, "reset"> = {
  tokens: {
    accessToken: null,
    refreshToken: null,
    accessTokenExpiration: null,
  },
  user: null,
  isAuthenticated: false,
  method: AuthMethod.NONE,
};

// Create observable state
export const authState$ = observable<AuthState>({
  ...initialState,
  reset: () => authState$.assign(initialState),
});
