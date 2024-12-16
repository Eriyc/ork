import { Auth, authState$ } from "../auth";
import { LocalLoginCommand } from "../commands";
import { MockAuthExecutor } from "../executors/mock-executor";

afterAll(() => {
  return authState$.reset();
});

const mockExecute = jest.fn((command, params) => command.execute(params));
const auth = new Auth(new MockAuthExecutor(mockExecute));

it("should start unauthenticated", () => {
  expect(authState$.isAuthenticated.get()).toBe(false);
});

it("should be able to login", async () => {
  await auth.login(new LocalLoginCommand(), undefined);

  const command = mockExecute.mock.calls[0][0];
  expect(command).toBeInstanceOf(LocalLoginCommand);

  expect(authState$.isAuthenticated.get()).toBe(true);
});

it("should be able to refresh", async () => {
  const oldAccessToken = authState$.tokens.accessToken.peek();
  expect(oldAccessToken).not.toBe(null);

  await auth.refresh();
  const newAccessToken = authState$.tokens.accessToken.peek();

  expect(oldAccessToken).not.toBe(newAccessToken);
  expect(authState$.isAuthenticated.get()).toBe(true);
});

it("should be able to logout", async () => {
  await auth.logout();

  expect(authState$.isAuthenticated.get()).toBe(false);
});
