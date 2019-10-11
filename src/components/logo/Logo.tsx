import React from 'react';
import './Logo.css';

import solidDice from '../../assets/solid-dice.svg';

type LogoProps = {
  short?: boolean;
};

const Logo = ({ short }: LogoProps) => {
  return short ? (
    <div id="shortLogo">
      <h1 className="title">T</h1>
      <h1 className="title">T</h1>
      <img src={solidDice} />
    </div>
  ) : (
    <div id="fullLogo">
      <h1 className="title">
        Tyrant's <img src={solidDice} /> Table
      </h1>
    </div>
  );
};

export default Logo;
