import React from 'react';
import CardItem from 'components/Home/CardItem';

function CardList({ cards }) {
  const cardList = cards.map((card) => {
    return <CardItem item={card} />;
  });
  return (
    <ul className="card-list">
      {cardList}
    </ul>
  );
}

export default CardList;
