import Header from "../components/Header/Header";
import Main from "../components/Main/Main";
import { Outlet } from "react-router-dom";

export default function MainPage() {
  return (
    <>
      <Outlet />
      <Header />
      <Main />
    </>
  );
}
