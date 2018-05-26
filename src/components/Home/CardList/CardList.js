import React from 'react';
import CardItem from 'components/Home/CardItem';

function CardList({ cards }) {
  const cardList = cards.map((card) => {
    <CardItem />
  });
  return (
    <ul className="card-list">
      {cardList}
    </ul>
  );
}

export default CardList;
