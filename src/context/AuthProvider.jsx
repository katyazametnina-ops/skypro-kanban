import { useState } from "react";
import { AuthContext } from "./AuthContext";
import { signIn, signUp } from "../services/auth";

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [user, setUser] = useState(() => {
    const savedUser = localStorage.getItem("user");
    return savedUser ? JSON.parse(savedUser) : null;
  });

  const isAuth = !!token;

  const login = async (userData) => {
    const data = await signIn(userData);
    localStorage.setItem("token", data.user.token);
    localStorage.setItem("user", JSON.stringify(data.user));
    setToken(data.user.token);
    setUser(data.user);
  };

  const register = async (userData) => {
    const data = await signUp(userData);
    localStorage.setItem("token", data.user.token);
    localStorage.setItem("user", JSON.stringify(data.user));
    setToken(data.user.token);
    setUser(data.user);
  };

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setToken(null);
    setUser(null);
  };

  return (
    <AuthContext.Provider
      value={{ isAuth, token, user, login, register, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
};
