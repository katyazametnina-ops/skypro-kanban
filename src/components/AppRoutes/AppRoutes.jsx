import { Routes, Route } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

import MainPage from "../../pages/MainPage";
import LoginPage from "../../pages/LoginPage";
import RegisterPage from "../../pages/RegisterPage";
import NotFoundPage from "../../pages/NotFoundPage";
import ExitPage from "../../pages/ExitPage";
import NewCardPage from "../../pages/NewCardPage";
import CardPage from "../../pages/CardPage";

import PrivateRoute from "./PrivateRoute";

export default function AppRoutes() {
  const { isAuth } = useContext(AuthContext);

  return (
    <Routes>
      <Route element={<PrivateRoute isAuth={isAuth} />}>
        <Route path="/" element={<MainPage />}>
          <Route path="/exit" element={<ExitPage />} />
          <Route path="/new-card" element={<NewCardPage />} />
          <Route path="/card/:id" element={<CardPage />} />
        </Route>
      </Route>

      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}
