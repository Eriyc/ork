import { AuthExecutor } from "./types";
import {
  AuthMethod,
  LoginCommand,
  LogoutCommand,
  RefreshCommand,
} from "./commands/types";
import { LocalLogoutCommand, LocalRefreshCommand } from "./commands/local";
import { authState$ } from "./state";

// Main Auth class
export class Auth {
  constructor(private executor: AuthExecutor) {}

  async login<T>(command: LoginCommand<T>, credentials: T): Promise<void> {
    await this.executor.execute(command, credentials);
  }

  async logout(): Promise<void> {
    let command: LogoutCommand;
    switch (authState$.method.get()) {
      case AuthMethod.NONE:
        return;

      default:
        command = new LocalLogoutCommand();
        break;
    }
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
