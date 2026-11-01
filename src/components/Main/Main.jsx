import { useContext } from "react";
import Column from "../Column/Column";
import { TaskContext } from "../../context/TaskContext";
import { StyledMain, MainBlock, MainContent } from "./Main.styled.js";

export default function Main() {
  const { tasks, isLoading, error } = useContext(TaskContext);

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
              <Column title="Без статуса" cardList={tasks} />
              <Column title="Нужно сделать" cardList={tasks} />
              <Column title="В работе" cardList={tasks} />
              <Column title="Тестирование" cardList={tasks} />
              <Column title="Готово" cardList={tasks} />
            </MainContent>
          )}
        </MainBlock>
      </div>
    </StyledMain>
  );
}
