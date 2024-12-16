import { AuthMethod } from "../../types";
import { RefreshCommand } from "../types";

export class LocalRefreshCommand extends RefreshCommand {
  constructor() {
    super(AuthMethod.NONE);
  }

  async execute(refreshToken: string): Promise<void> {
    return;
  }
}
