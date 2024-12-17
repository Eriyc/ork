import { nanoid } from "nanoid";
import { AuthMethod, RefreshCommand } from "../types";
import { authState$ } from "../../state";

export class LocalRefreshCommand extends RefreshCommand {
  constructor() {
    super(AuthMethod.LOCAL);
  }

  async execute(): Promise<void> {
    const accessToken = nanoid();
    const newToken = nanoid();

    authState$.assign({
      tokens: {
        accessToken,
        refreshToken: newToken,
        accessTokenExpiration: Date.now() + 1000 * 60,
      },
    });

    return;
  }
}
