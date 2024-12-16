import { createContext, ReactNode, useContext, useEffect } from "react";
import { Auth } from "./auth";

const AuthContext = createContext<Auth>(null!);

export const AuthProvider = ({
  children,
  auth,
}: {
  children: ReactNode;
  auth: Auth;
}) => {
  return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("Auth context not found");
  }

  return context;
};
