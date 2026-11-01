import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import {
  PopExit,
  PopExitContainer,
  PopExitBlock,
  PopExitTtl,
  PopExitFormGroup,
  ExitYesButton,
  ExitNoButton,
} from "./ExitPage.styled.js";

export default function ExitPage() {
  const navigate = useNavigate();
  const { logout } = useContext(AuthContext);

  const handleLogout = (e) => {
    e.preventDefault();
    logout();
    navigate("/login");
  };

  return (
    <PopExit id="popExit">
      <PopExitContainer>
        <PopExitBlock>
          <PopExitTtl>
            <h2>Выйти из аккаунта?</h2>
          </PopExitTtl>
          <form id="formExit" action="#">
            <PopExitFormGroup>
              <ExitYesButton id="exitYes" onClick={handleLogout}>
                Да, выйти
              </ExitYesButton>
              <ExitNoButton id="exitNo">
                <Link to="/">Нет, остаться</Link>
              </ExitNoButton>
            </PopExitFormGroup>
          </form>
        </PopExitBlock>
      </PopExitContainer>
    </PopExit>
  );
}
