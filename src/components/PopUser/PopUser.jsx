import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import { ThemeContext } from "../../context/ThemeContext";
import {
  PopUserSet,
  PopUserName,
  PopUserMail,
  PopUserTheme,
  PopUserButton,
} from "./PopUser.styled.js";

export default function PopUser() {
  const { user } = useContext(AuthContext);
  const { themeMode, toggleTheme } = useContext(ThemeContext);

  return (
    <PopUserSet id="user-set-target">
      <PopUserName>{user?.name || "Пользователь"}</PopUserName>
      <PopUserMail>{user?.email || "email"}</PopUserMail>
      <PopUserTheme>
        <p>Темная тема</p>
        <input
          type="checkbox"
          className="checkbox"
          name="checkbox"
          checked={themeMode === "dark"}
          onChange={toggleTheme}
        />
      </PopUserTheme>
      <PopUserButton type="button">
        <Link to="/exit">Выйти</Link>
      </PopUserButton>
    </PopUserSet>
  );
}
