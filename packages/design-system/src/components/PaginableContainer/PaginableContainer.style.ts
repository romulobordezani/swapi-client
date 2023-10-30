import { css } from '@emotion/react';

export const containerCss = css`
  padding: 30px;
`;

export const masonryContainer = css`
  display: grid;
  gap: 30px;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  grid-template-rows: masonry;

  .item {
    padding: 0;
  }
`;

export const navButtonsCss = css`
  display: flex;
  justify-content: space-between;
  margin-bottom: 30px;

  .navButtonsCss__emptySpacer {
    visibility: hidden;
  }
`;
