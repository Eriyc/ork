import "react-native-get-random-values";
import "./index.css";

import { Slot } from "expo-router";
import {
  Auth,
  AuthProvider,
  StandardAuthExecutor,
} from "~/features/authentication";

const auth = new Auth(new StandardAuthExecutor());

export default function RootLayout() {
  return (
    <AuthProvider auth={auth}>
      <RootNavigation />
    </AuthProvider>
  );
}

const RootNavigation = () => {
  return <Slot />;
};
