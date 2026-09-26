import Column from "../Column/Column";
import { cardList } from "../../modules/data.js";
import { useState, useEffect } from "react";

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
    <main className="main">
      <div className="container">
        <div className="main__block">
          <div className="main__block">
            {isLoading ? (
              <div className="loading">Данные загружаются...</div>
            ) : (
              <div className="main__content">
                <Column title="Без статуса" cardList={cards} />
                <Column title="Нужно сделать" cardList={cards} />
                <Column title="В работе" cardList={cards} />
                <Column title="Тестирование" cardList={cards} />
                <Column title="Готово" cardList={cards} />
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}
