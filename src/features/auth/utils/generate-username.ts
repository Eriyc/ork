export const generateUsername = (email: string) =>
  email.split('@')[0].split('+')[0];
