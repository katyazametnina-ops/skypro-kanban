import { useState } from "react";
import { AuthContext } from "./AuthContext";
import { signIn, signUp } from "../services/auth";

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem("token"));
  const isAuth = !!token;

  const login = async (userData) => {
    const data = await signIn(userData);
    localStorage.setItem("token", data.user.token);
    setToken(data.user.token);
  };

  const register = async (userData) => {
    const data = await signUp(userData);
    localStorage.setItem("token", data.user.token);
    setToken(data.user.token);
  };

  const logout = () => {
    localStorage.removeItem("token");
    setToken(null);
  };

  return (
    <AuthContext.Provider value={{ isAuth, token, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
