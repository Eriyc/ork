import { authState$ } from "../../state";
import type { AuthUser } from "../../types";
import { AuthMethod } from "../types";
import { LoginCommand } from "../types";
import { nanoid } from "nanoid";

export class LocalLoginCommand extends LoginCommand<never> {
  method = AuthMethod.LOCAL;

  async execute(): Promise<void> {
    const id = nanoid();

    const accessToken = nanoid();
    const refreshToken = nanoid();

    const user: AuthUser = {
      id,
    };

    authState$.assign({
      isAuthenticated: true,
      method: this.method,
      user,
      tokens: {
        accessToken,
        refreshToken,
        accessTokenExpiration: Date.now() + 1000 * 60,
      },
    });
    return;
  }
}
