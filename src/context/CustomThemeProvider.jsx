import { useState, useContext } from "react";
import { ThemeProvider } from "styled-components";
import { ThemeContext } from "./ThemeContext";
import { AuthContext } from "./AuthContext";
import { lightTheme, darkTheme } from "../modules/theme";

const getSavedTheme = (login) => {
  if (login) {
    return (
      localStorage.getItem(`theme_${login}`) ||
      localStorage.getItem("theme") ||
      "light"
    );
  }
  return localStorage.getItem("theme") || "light";
};

export const CustomThemeProvider = ({ children }) => {
  const { user } = useContext(AuthContext);
  const [userLogin, setUserLogin] = useState(user?.login);
  const [themeMode, setThemeMode] = useState(() => getSavedTheme(user?.login));

  // Официальный паттерн React для сброса состояния при смене пользователя без useEffect
  if (user?.login !== userLogin) {
    setUserLogin(user?.login);
    setThemeMode(getSavedTheme(user?.login));
  }

  const toggleTheme = () => {
    const nextTheme = themeMode === "light" ? "dark" : "light";
    setThemeMode(nextTheme);
    localStorage.setItem("theme", nextTheme);
    if (user?.login) {
      localStorage.setItem(`theme_${user.login}`, nextTheme);
    }
  };

  const currentTheme = themeMode === "light" ? lightTheme : darkTheme;

  return (
    <ThemeContext.Provider value={{ themeMode, toggleTheme }}>
      <ThemeProvider theme={currentTheme}>{children}</ThemeProvider>
    </ThemeContext.Provider>
  );
};
