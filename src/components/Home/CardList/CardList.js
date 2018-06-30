import React from 'react';
import CardItem from 'components/Home/CardItem';
import './CardList.scss';

function CardList({ cards }) {
  const cardList = cards.map((card) => {
    return <CardItem item={card} />;
  });
  return (
    <section className="container">
      <ul className="card-list">
        {cardList}
      </ul>
    </section>
  );
}

export default CardList;
