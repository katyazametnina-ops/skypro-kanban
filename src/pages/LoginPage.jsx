import { useNavigate } from "react-router-dom";

export default function LoginPage({ setIsAuth }) {
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    setIsAuth(true);
    navigate("/");
  };

  return (
    <div>
      <h1>Страница входа</h1>
      <button onClick={handleLogin}>Войти в систему</button>
    </div>
  );
}
