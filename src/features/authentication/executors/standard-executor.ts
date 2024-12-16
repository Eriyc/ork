import { AuthCommand, AuthExecutor } from "../types";

export class StandardAuthExecutor implements AuthExecutor {
  async execute<T>(command: AuthCommand<T>, params: T): Promise<void> {
    await command.execute(params);
  }
}
