import { LogoutCommand } from "../types";

export class LocalLogoutCommand extends LogoutCommand {
  async execute(): Promise<void> {
    return;
  }
}
