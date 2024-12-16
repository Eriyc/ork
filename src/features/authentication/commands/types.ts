import { AuthCommand, AuthMethod } from "../types";

// Base command classes for different auth operations
export abstract class LoginCommand<T> implements AuthCommand<T> {
  abstract method: AuthMethod;
  abstract execute(params: T): Promise<void>;
}

export abstract class LogoutCommand implements AuthCommand<void> {
  method = AuthMethod.NONE;
  abstract execute(): Promise<void>;
}

export abstract class RefreshCommand implements AuthCommand<string> {
  method: AuthMethod;
  constructor(method: AuthMethod) {
    this.method = method;
  }
  abstract execute(refreshToken: string): Promise<void>;
}
