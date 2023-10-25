import { css } from '@emotion/react';

export const content = css`
  font-size: inherit;

  .content__info {
    display: flex;
    flex-wrap: wrap;

    .content__info__label {
      font-weight: 600;
      margin-right: 5px;
    }

    .content__info__value {
      color: inherit;
    }
  }
`;
