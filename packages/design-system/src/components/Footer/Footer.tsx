import React, { FC } from 'react';
import { footer } from './Footer.style';

export const Footer: FC = () => {
  return (
    <footer css={footer} role="contentinfo">
      © 2023 &nbsp;
      <a href="https://romulobordezani.com.br/" target="_blank">
        R&B
      </a>
      . Made with 🩶 and &nbsp; <a href="https://swapi.dev/">swapi.dev</a>
    </footer>
  );
};
