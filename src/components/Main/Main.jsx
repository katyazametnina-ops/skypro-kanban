import Column from "../Column/Column";
import { StyledMain, MainBlock, MainContent } from "./Main.styled.js";

export default function Main({ cards, isLoading, error }) {
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
