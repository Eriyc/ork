export enum AuthMethod {
  PASSWORD = "PASSWORD",
  OAUTH = "OAUTH",
  PASSKEY = "PASSKEY",
  LOCAL = "LOCAL",
  NONE = "NONE",
}

export interface AuthCommand<T = unknown> {
  method: AuthMethod;
  execute(params: T): Promise<void>;
}

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
