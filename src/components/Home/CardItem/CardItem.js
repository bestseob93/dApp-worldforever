import React from 'react';
import CircularProgressbar from 'react-circular-progressbar';
import { Link } from 'react-router-dom';
import './CardItem.scss';

function CardItem({ item }) {
  const percentage = 66;

  return (
    <li>
      <div className="thumb">
        <img src="https://s3.eu-west-2.amazonaws.com/alice-res/Splash_4x3.jpg" alt="img" />
      </div>
      <div className="contents-overlay">
      </div>
      <div className="contents-box">
        <label htmlFor="hi" className="type">label</label>
        <h3 className="title">{item.title}</h3>
        <p className="description">{item.description}</p>
        <div className="progress-wrapper">
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
          <div className="balance-wrapper">
            <p className="contributors">
              <span>4</span> Approvoers
            </p>
            <p className="raised">
              <span>1,300</span> ether raised
            </p>
            <p className="balance">
              <span>100</span> ether left
            </p>
          </div>
          <Link to="/" className="detail-btn">
            VIEW
          </Link>
        </div>
      </div>
    </li>
  );
}

export default CardItem;
