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

export default function LoginPage() {
  const navigate = useNavigate();
  const { login } = useContext(AuthContext);
  const [formData, setFormData] = useState({ login: "", password: "" });
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = () => {
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

  const handleLogin = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    try {
      setIsSubmitting(true);
      await login(formData);
      navigate("/");
    } catch (err) {
      setError(err.message);
    } finally {
      setIsSubmitting(false);
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
            disabled={isSubmitting}
          />
          <StyledInput
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Пароль"
            disabled={isSubmitting}
          />
          <SubmitButton
            type="submit"
            disabled={isSubmitting}
            style={{
              opacity: isSubmitting ? 0.6 : 1,
              cursor: isSubmitting ? "not-allowed" : "pointer",
            }}
          >
            {isSubmitting ? "Вход..." : "Войти"}
          </SubmitButton>
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
