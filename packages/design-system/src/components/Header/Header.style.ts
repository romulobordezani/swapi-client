import { css } from '@emotion/react';
import { swYellow } from '../../theme/colors.constant';

export const header = css`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-content: space-around;
  align-items: center;
  justify-content: space-between;
`;

export const logo_group = css`
  display: flex;
  flex-direction: row;
`;

export const logo_group__icon = css`
  padding: 40px 30px 30px 30px;
  width: 50px;

  img {
    width: 100%;
    height: auto;
  }
`;

export const logo_group__type = css`
  font-family: 'lato', sans-serif;
  font-weight: 300;
  font-size: 30px;
  letter-spacing: 10px;
  color: #ffffff;
  align-items: center;
  display: flex;
`;

export const header__nav = css`
  padding: 20px 20px 20px 0;

  ul {
    width: 100%;

    li {
      display: inline-block;
      list-style: none;
      margin-right: 10px;

      a {
        font-size: 20px;
        text-decoration: none;
        line-height: 20px;
        display: flex;
        align-items: center;
        font-weight: 100;
        padding: 10px;
        border-radius: 10px;
        transition: background-color 0.3s ease-out;

        svg {
          vertical-align: bottom;
          padding-right: 5px;
        }
      }

      a.active {
        transition: background-color 0.7s ease-in;
        background: ${swYellow};
        color: #000000;
      }
    }
  }
`;
