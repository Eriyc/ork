import { AuthCommand, AuthExecutor } from "../types";

export class MockAuthExecutor implements AuthExecutor {
  constructor(private mockFn: jest.MockedFn<any>) {}

  async execute<T>(command: AuthCommand<T>, params: T): Promise<void> {
    this.mockFn(command, params);
  }
}
