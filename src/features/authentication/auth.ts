import { observable } from "@legendapp/state";

import { AuthExecutor, AuthMethod, AuthState } from "./types";
import { LoginCommand, LogoutCommand, RefreshCommand } from "./commands";
import { LocalRefreshCommand } from "./commands/local";

// Create observable state
export const authState$ = observable<AuthState>({
  tokens: {
    accessToken: null,
    refreshToken: null,
    accessTokenExpiration: null,
  },
  user: null,
  isAuthenticated: false,
  method: AuthMethod.NONE,
});

// Main Auth class
export class Auth {
  constructor(private executor: AuthExecutor) {}

  async login<T>(command: LoginCommand<T>, credentials: T): Promise<void> {
    await this.executor.execute(command, credentials);
  }

  async logout(command: LogoutCommand): Promise<void> {
    await this.executor.execute(command, undefined);
  }

  async refresh(): Promise<void> {
    const refreshToken = authState$.tokens.refreshToken.get();
    if (!refreshToken) throw new Error("No refresh token available");

    let command: RefreshCommand;
    switch (authState$.method.get()) {
      case AuthMethod.NONE:
        return;
      default:
        command = new LocalRefreshCommand();
        break;
    }

    await this.executor.execute(command, refreshToken);
  }

  async hydrate(): Promise<void> {
    const expiration = authState$.tokens.accessTokenExpiration.get();
    if (expiration && expiration < Date.now()) {
      await this.refresh();
    }
  }
}
