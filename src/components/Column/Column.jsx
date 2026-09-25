import Card from "../Card/Card";

export default function Column({ title, cardList }) {
  return (
    <div className="main__column column">
      <div className="column__title">
        <p>{title}</p>
      </div>
      <div className="cards">
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
      </div>
    </div>
  );
}
