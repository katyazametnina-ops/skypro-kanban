import { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
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
      const msg = "Введите логин";
      setError(msg);
      toast.error(msg);
      return false;
    }
    if (!formData.password.trim()) {
      const msg = "Введите пароль";
      setError(msg);
      toast.error(msg);
      return false;
    }
    return true;
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    try {
      setIsSubmitting(true);
      setError("");
      await login(formData);
      toast.success("Добро пожаловать!");
      navigate("/");
    } catch (err) {
      const errorMessage =
        err.message === "Failed to fetch"
          ? "Ошибка соединения с сервером"
          : "Неверный логин или пароль";

      setError(errorMessage);
      toast.error(errorMessage);
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
