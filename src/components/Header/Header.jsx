import PopUser from "../PopUser/PopUser";
import { useState } from "react";
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
  return (
    <StyledHeader>
      <div className="container">
        <HeaderBlock>
          <HeaderLogo>
            <a href="" target="_self">
              <img src="images/logo.png" alt="logo" />
            </a>
          </HeaderLogo>
          <HeaderLogo className="_dark">
            <a href="" target="_self">
              <img src="images/logo_dark.png" alt="logo" />
            </a>
          </HeaderLogo>
          <HeaderNav>
            <CreateButton>
              <a href="#popNewCard">Создать новую задачу</a>
            </CreateButton>
            <HeaderUser
              href="#user-set-target"
              onClick={(event) => {
                event.preventDefault();
                setIsOpen((currentValue) => !currentValue);
              }}
            >
              Ivan Ivanov
            </HeaderUser>
            {isOpen && <PopUser />}
          </HeaderNav>
        </HeaderBlock>
      </div>
    </StyledHeader>
  );
}
