import Column from "../Column/Column";
import { cardList } from "../../modules/data.js";
import { useState, useEffect } from "react";
import { StyledMain, MainBlock, MainContent } from "./Main.styled.js";

export default function Main() {
  const [cards, setCards] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setCards(cardList);
      setIsLoading(false);
    }, 2000);
  }, []);

  return (
    <StyledMain>
      <div className="container">
        <MainBlock>
          {isLoading ? (
            <div className="loading">Данные загружаются...</div>
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
