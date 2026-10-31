import { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
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

export default function RegisterPage() {
  const navigate = useNavigate();
  const { register } = useContext(AuthContext);
  const [formData, setFormData] = useState({
    name: "",
    login: "",
    password: "",
  });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = () => {
    if (!formData.name.trim()) {
      setError("Введите имя");
      return false;
    }
    if (!formData.login.trim()) {
      setError("Введите логин");
      return false;
    }
    if (!formData.password.trim()) {
      setError("Введите пароль");
      return false;
    }
    return true;
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;
    try {
      await register(formData);
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
          Уже есть аккаунт?{" "}
          <Link to="/login">
            <StyledLink>Войти здесь</StyledLink>
          </Link>
        </FooterText>
      </AuthCard>
    </PageWrapper>
  );
}
