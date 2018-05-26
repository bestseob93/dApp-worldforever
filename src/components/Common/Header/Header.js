import React from 'react';
import { Link } from 'react-router-dom';
import Nav from 'components/Common/Nav';
import Logo from 'static/img/logo.png';
import './Header.scss';

function Header() {
  return (
    <header>
      <div className="wrapper">
        <Link to="/">
          <span className="logo"><img src={Logo} alt="logo" /></span>
        </Link>
        <Nav />
      </div>
    </header>
  );
}

export default Header;
