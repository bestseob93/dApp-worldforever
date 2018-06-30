import React from 'react';
import CircularProgressbar from 'react-circular-progressbar';
import './CardItem.scss';

function CardItem({ item }) {
  const percentage = 66;

  return (
    <li>
      <div className="thumb">
        <img src="https://s3.eu-west-2.amazonaws.com/alice-res/Splash_4x3.jpg" alt="img" />
      </div>
      <div className="contents overlay">
        <label htmlFor="hi" className="type">label</label>
        <h3 className="title">{item.title}</h3>
        <p className="description">{item.description}</p>
        <div className="progress">
          <CircularProgressbar
            percentage={percentage}
            text={`${percentage}%`}
            styles={{
              path: {
                stroke: '#f49000',
              },
              text: {
                fill: '#f49000'
              }
            }}
          />
        </div>
      </div>
    </li>
  );
}

export default CardItem;
