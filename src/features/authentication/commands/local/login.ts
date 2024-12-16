import { AuthMethod } from "../../types";
import { LoginCommand } from "../types";

export class LocalLoginCommand extends LoginCommand<never> {
  method = AuthMethod.NONE;

  async execute(): Promise<void> {
    return;
  }
}
