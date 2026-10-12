import Column from "../Column/Column";
import { useState, useEffect } from "react";
import { StyledMain, MainBlock, MainContent } from "./Main.styled.js";
import { getTasks } from "../../services/tasks";

export default function Main() {
  const [cards, setCards] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  const token = localStorage.getItem("token");

  useEffect(() => {
    const loadTasks = async () => {
      try {
        setIsLoading(true);
        const data = await getTasks(token);
        console.log(data.tasks);
        setCards(data.tasks);
      } catch (err) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };

    loadTasks();
  }, []);

  return (
    <StyledMain>
      <div className="container">
        <MainBlock>
          {isLoading ? (
            <div className="loading">Данные загружаются...</div>
          ) : error ? (
            <div className="error">Ошибка: {error}</div>
          ) : (
            <MainContent>
              <Column title="Без статуса" cardList={cards} />
              <Column title="Нужно сделать" cardList={cards} />
              <Column title="В работе" cardList={cards} />
              <Column title="Тестирование" cardList={cards} />
              <Column title="Готово" cardList={cards} />
            </MainContent>
          )}
        </MainBlock>
      </div>
    </StyledMain>
  );
}
