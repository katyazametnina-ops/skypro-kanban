import Header from "../components/Header/Header";
import Main from "../components/Main/Main";
import { Outlet } from "react-router-dom";
import { useState, useEffect, useCallback } from "react";
import { getTasks } from "../services/tasks";

export default function MainPage() {
  const [cards, setCards] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");
  const token = localStorage.getItem("token");

  const loadTasks = useCallback(async () => {
    try {
      setIsLoading(true);
      const data = await getTasks(token);
      setCards(data.tasks);
    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  }, [token]);

  useEffect(() => {
    loadTasks();
  }, [loadTasks]);

  return (
    <>
      <Outlet context={{ loadTasks }} />
      <Header />
      <Main cards={cards} isLoading={isLoading} error={error} />
    </>
  );
}
