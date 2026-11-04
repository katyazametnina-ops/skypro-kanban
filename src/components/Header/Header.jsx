import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import PopUser from "../PopUser/PopUser";
import { AuthContext } from "../../context/AuthContext";
import { ThemeContext } from "../../context/ThemeContext";
import {
  CreateButton,
  StyledHeader,
  HeaderBlock,
  HeaderLogo,
  HeaderNav,
  HeaderUser,
} from "./Header.styled.js";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const { user } = useContext(AuthContext);
  const { themeMode } = useContext(ThemeContext);

  return (
    <StyledHeader>
      <div className="container">
        <HeaderBlock>
          <HeaderLogo>
            <a href="" target="_self">
              <img
                src={
                  themeMode === "light"
                    ? "images/logo.png"
                    : "images/logo_dark.png"
                }
                alt="logo"
              />
            </a>
          </HeaderLogo>
          <HeaderNav>
            <CreateButton>
              <Link to="/new-card">Создать новую задачу</Link>
            </CreateButton>
            <HeaderUser
              href="#user-set-target"
              onClick={(event) => {
                event.preventDefault();
                setIsOpen((currentValue) => !currentValue);
              }}
            >
              {user?.name || "Пользователь"}
            </HeaderUser>
            {isOpen && <PopUser />}
          </HeaderNav>
        </HeaderBlock>
      </div>
    </StyledHeader>
  );
}
