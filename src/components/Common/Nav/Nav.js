import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.scss';

function Nav() {
  return (
    <div className="nav-wrapper">
      <ul className="nav">
        <li><Link to="/campaigns">Campaigns</Link></li>
        <li><Link to="/news">News</Link></li>
        <li><Link to="/Notice">Notice</Link></li>
      </ul>
    </div>
  );
}

export default Nav;
