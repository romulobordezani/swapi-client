import { css } from '@emotion/react';

export const home = css`
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
`;

export const featuredImage = css`
  width: 30%;
  height: fit-content;
  transform-style: preserve-3d;

  img {
    width: 100%;
    height: auto;
  }
`;
