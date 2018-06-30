import React from 'react';
import CircularProgressbar from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

function CardItem() {
  const percentage = 66;

  return (
    <li>
      <a href="https://naver.com">  {/* TODO: replace to <Link> */}
        <div className="thumb">
          a
        </div>
        <div className="contents">
          <label htmlFor="hi" className="type">a</label>
          <h3 className="title">3</h3>
          <p className="description">4</p>
          <div className="progress">
            <CircularProgressbar
              percentage={percentage}
              text={`${percentage}%`}
            />
          </div>
        </div>
      </a>
    </li>
  );
}

export default CardItem;
