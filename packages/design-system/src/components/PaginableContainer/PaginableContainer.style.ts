import { css } from '@emotion/react';

export const masonryContainer = css`
  display: grid;
  gap: 30px;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  grid-template-rows: masonry;

  .item {
    padding: 0;
  }
`;
