import React from 'react';
import { Link } from 'react-router-dom';
import Nav from 'components/Common/Nav';
import DappIcons from 'components/Common/DappIcons';

import Logo from 'static/img/logo.png';
import './Header.scss';

function Header() {
  return (
    <header>
      <div className="wrapper">
        <Link className="logo" to="/">
          <img src={Logo} alt="logo" />
        </Link>
        <DappIcons />
        <Nav />
      </div>
    </header>
  );
}

export default Header;
