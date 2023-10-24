import { css } from '@emotion/react';
import { largeScreen, desktop } from 'DesignSystem/Theme';

export const home = css`
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
`;

export const featuredImage = css`
  width: 60%;
  height: fit-content;
  transform-style: preserve-3d;

  @media ${desktop} {
    width: 40%;
  }

  @media ${desktop} {
    width: 30%;
  }

  @media ${largeScreen} {
    width: 30%;
  }

  img {
    -webkit-user-drag: none;
    -khtml-user-drag: none;
    -moz-user-drag: none;
    -o-user-drag: none;
    user-drag: none;
    width: 100%;
    height: auto;
  }
`;
