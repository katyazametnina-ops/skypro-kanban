import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { signIn } from "../services/auth";
import {
  PageWrapper,
  AuthCard,
  Title,
  StyledInput,
  SubmitButton,
  FooterText,
  StyledLink,
  ErrorText,
} from "./LoginPage.styled.js";

export default function LoginPage({ setIsAuth }) {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    login: "",
    password: "",
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const data = await signIn(formData);
      localStorage.setItem("token", data.user.token);

      setIsAuth(true);
      navigate("/");
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <PageWrapper>
      <AuthCard>
        <Title>Вход</Title>
        {error && <ErrorText>{error}</ErrorText>}
        <form onSubmit={handleLogin}>
          <StyledInput
            type="text"
            name="login"
            value={formData.login}
            onChange={handleChange}
            placeholder="Эл. почта"
          />
          <StyledInput
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Пароль"
          />
          <SubmitButton type="submit">Войти</SubmitButton>
        </form>
        <FooterText>
          Нужно зарегистрироваться?
          <br />
          <Link to="/register">
            <StyledLink>Регистрируйтесь здесь</StyledLink>
          </Link>
        </FooterText>
      </AuthCard>
    </PageWrapper>
  );
}
