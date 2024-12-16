import { authState$ } from "../../auth";
import { LogoutCommand } from "../types";

export class LocalLogoutCommand extends LogoutCommand {
  async execute(): Promise<void> {
    authState$.reset();

    return;
  }
}
