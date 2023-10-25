import { css } from '@emotion/react';
import { largeScreen } from '../../theme/breakpoints.constant';
import { paperWhite, swYellow } from '../../theme/colors.constant';

export const header = css`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-content: space-around;
  align-items: center;
  justify-content: space-between;
  container-type: inline-size;
  font-size: 1.2rem;

  @media ${largeScreen} {
    flex-direction: row;
  }
`;

export const header__logo = css`
  display: flex;
  flex-direction: row;
  font-size: inherit;
  text-decoration: none;
  gap: 30px;
  padding: 30px 0;

  @container ${largeScreen} {
    font-size: 2rem;
    padding: 30px 0 0 30px;
  }
`;

export const header__logo__icon = css`
  img {
    width: auto;
    height: 50px;
  }
`;

export const header__logo__text = css`
  font-family: 'lato', sans-serif;
  font-weight: 300;
  font-size: 1.7rem;
  letter-spacing: 5px;
  color: ${paperWhite}
  align-items: center;
  display: flex;
`;

export const header__nav = css`
  @media ${largeScreen} {
    font-size: 1.3rem;
  }

  ul {
    margin: 0;
    padding: 0 20px;
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    gap: 10px;

    li {
      list-style: none;

      a {
        font-size: inherit;
        text-decoration: none;
        display: flex;
        align-items: center;
        font-weight: 100;
        padding: 5px;
        border-radius: 5px;
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
