import Card from "../Card/Card";
import { StyledColumn, ColumnTitle, CardsContainer } from "./Column.styled.js";

export default function Column({ title, cardList }) {
  return (
    <StyledColumn>
      <ColumnTitle>
        <p>{title}</p>
      </ColumnTitle>
      <CardsContainer>
        {cardList
          .filter((card) => card.status === title)
          .map((card) => (
            <Card
              key={card.id}
              topic={card.topic}
              title={card.title}
              date={card.date}
            />
          ))}
      </CardsContainer>
    </StyledColumn>
  );
}
