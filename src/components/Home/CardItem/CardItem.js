import React from 'react';
import { Line } from 'rc-progress';

function CardItem() {
  return (
    <li>
      <a href="https://naver.com">  {/* TODO: replace to <Link> */}
        <div className="thumb">
        </div>
        <div className="contents">
          <label className="type"></label>
          <h3 className="title"></h3>
          <p className="description"></p>
          <div className="progress">
            <Line percent="10" strokeWidth="4" strokeColor="#D3D3D3" />
          </div>
        </div>
      </a>
    </li>
  );
}

export default CardItem;
