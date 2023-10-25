import { css } from '@emotion/react';
import { largeScreen, swYellow } from './theme';

const globalStyle = css`
  html,
  body {
    padding: 0;
    margin: 0;
    background: white;
    height: 100%;
    height: 100%;
    font-family: 'lato', sans-serif;
    background: #111111;
    color: #ffffff;
    font-size: 12px;
    letter-spacing: 2px;
    overflow-x: hidden;

    a {
      color: #ffffff;
      text-decoration: none;
      transition: color 0.5s ease;

      :hover {
        color: ${swYellow};
      }
    }

    @media ${largeScreen} {
      font-size: 16px;
    }
  }

  #host {
    height: 100%;
  }
`;

export default globalStyle;
