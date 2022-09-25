import {signInWithEmailAndPassword} from './sign-in-with-email-and-password';
import {signInWithProvider} from './sign-in-with-provider';
import {signOut} from './sign-out';
import {fetchUserData} from './fetch-user-data';
import {deleteAccount} from './delete-account';

export const authService = {
  signInWithEmailAndPassword,
  signInWithProvider,
  signOut,
  fetchUserData,
  deleteAccount,
};
