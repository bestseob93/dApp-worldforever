import React from 'react';
import { Link } from 'react-router-dom';
import './Header.scss';

function Header() {
  return (
    <header>
      <div className="wrapper">
        <Link to="/">
          <span className="logo">WorldForever</span>
        </Link>
        <ul>
          <Link to="/campaigns"><li>Campaigns</li></Link>
          <Link to="/news"><li>News</li></Link>
          <Link to="/Notice"><li>Notice</li></Link>
        </ul>
      </div>
    </header>
  );
}

export default Header;
