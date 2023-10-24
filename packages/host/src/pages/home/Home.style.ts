import { css } from '@emotion/react';
import { largeScreen } from 'DesignSystem/Theme';

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

  @media ${largeScreen} {
    width: 30%;
  }

  img {
    width: 100%;
    height: auto;
  }
`;
