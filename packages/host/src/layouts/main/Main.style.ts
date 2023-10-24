import { css } from '@emotion/react';
import galaxyBg from './assets/galaxy.png';

export const layoutContainer = css`
  background: radial-gradient(ellipse at bottom, #1b2735 0%, #090a0f 100%);
  background-image: url(${galaxyBg});
  background-repeat: repeat;
  background-attachment: fixed;
  min-height: 100%;
  margin-bottom: -50px;
  animation: blur 4s ease 0s infinite;
`;

export const mainLayout = css`
  padding: 2%;
  margin-bottom: -50px;
`;

export const push = css`
  height: 50px;
`;
