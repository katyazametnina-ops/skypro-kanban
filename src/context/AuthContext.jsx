import { createContext, useState } from "react";
import { signIn, signUp } from "../services/auth";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuth, setIsAuth] = useState(!!localStorage.getItem("token"));

  const login = async (userData) => {
    const data = await signIn(userData);
    localStorage.setItem("token", data.user.token);
    setIsAuth(true);
  };

  const register = async (userData) => {
    const data = await signUp(userData);
    localStorage.setItem("token", data.user.token);
    setIsAuth(true);
  };

  const logout = () => {
    localStorage.removeItem("token");
    setIsAuth(false);
  };

  return (
    <AuthContext.Provider value={{ isAuth, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
