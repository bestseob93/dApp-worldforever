import React from 'react';
import { Link } from 'react-router-dom';

import TrustWalletIcon from 'static/img/trustwallet-icon.png';
import MetaMaskIcon from 'static/img/metamask-icon.png';
import './DappIcons.scss';

function DappIcons() {
  const metaMaskLink = 'https://chrome.google.com/webstore/detail/nkbihfbeogaeaoehlefnkodbefgpgknn';
  return (
    <div className="ethereum-icons">
      {/* TODO: User Client에 따른 보여주는 방식 변경 */}
      <Link to=""><img className="icons" src={TrustWalletIcon} alt="trust wallet" /></Link>
      <Link to={metaMaskLink}><img className="icons" src={MetaMaskIcon} alt="metamask" /></Link>
    </div>
  );
}

export default DappIcons;
