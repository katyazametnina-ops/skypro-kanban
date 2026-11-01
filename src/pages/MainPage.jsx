import Header from "../components/Header/Header";
import Main from "../components/Main/Main";
import { Outlet } from "react-router-dom";
import { useContext, useEffect } from "react";
import { TaskContext } from "../context/TaskContext";

export default function MainPage() {
  const { loadTasks } = useContext(TaskContext);

  useEffect(() => {
    loadTasks();
  }, [loadTasks]);

  return (
    <>
      <Outlet />
      <Header />
      <Main />
    </>
  );
}
