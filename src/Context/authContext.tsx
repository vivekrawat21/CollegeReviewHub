import { createContext, useEffect, useState } from "react";
import Cookies from "js-cookie";

type AuthContextType = {
  token: string | null;
};

const AuthContext = createContext<AuthContextType>({ token: null });

const AuthProvider: React.FC = ({ children }: React.PropsWithChildren<{}>) => {
  const [token, setToken] = useState<string | any>(null);

  useEffect(() => {
    const currentToken = Cookies.get("token");
    setToken(currentToken);
  }, []);

  return <AuthContext.Provider value={{ token }}>{children}</AuthContext.Provider>;
};

export { AuthContext, AuthProvider };
