import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { signUp } from "../services/auth";
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

export default function RegisterPage({ setIsAuth }) {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
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

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const data = await signUp(formData);
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
        <Title>Регистрация</Title>
        {error && <ErrorText>{error}</ErrorText>}
        <form onSubmit={handleRegister}>
          <StyledInput
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Имя"
          />
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
          <SubmitButton type="submit">Зарегистрироваться</SubmitButton>
        </form>
        <FooterText>
          Уже есть аккаунт?
          <Link to="/login">
            <StyledLink>Войдите здесь</StyledLink>
          </Link>
        </FooterText>
      </AuthCard>
    </PageWrapper>
  );
}
