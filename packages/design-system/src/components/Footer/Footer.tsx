import React from 'react';
import { footer } from './Footer.style';

function Footer() {
  return (
    <footer css={footer} role="contentinfo">
      © 2023 &nbsp;
      <a href="https://romulobordezani.com.br/" target="_blank">
        R&B
      </a>
      . Made with 🩶 and &nbsp; <a href="https://swapi.dev/">swapi.dev</a>
    </footer>
  );
}

export default Footer;
