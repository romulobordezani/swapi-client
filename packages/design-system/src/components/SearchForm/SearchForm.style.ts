import { css } from '@emotion/react';
import { swYellow } from '../../theme';
import searchIcon from './assets/icons-search.svg';

export const searchFormContainer = css`
  padding: 0 0 0 30px;
`;

export const input = css`
  background-color: ${swYellow};
  background-image: url(${searchIcon});
  text-indent: 40px;
  background-repeat: no-repeat;
  background-position: 10px;
  padding: 10px;
  font-size: 1.2rem;
  border: none;
  border-radius: 10px;
`;
