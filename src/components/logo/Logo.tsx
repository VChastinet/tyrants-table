import React from 'react';
import './Logo.css';

import fullLogo from '../../assets/logo-long.png';
import logoShort from '../../assets/logo-short.png';

type LogoProps = {
  short?: boolean;
};

const Logo = ({ short }: LogoProps) => {
  return short ? (
    <div id="shortLogo">
      <img src={logoShort} />
    </div>
  ) : (
    <div id="fullLogo">
      <img src={fullLogo} />
    </div>
  );
};

export default Logo;
