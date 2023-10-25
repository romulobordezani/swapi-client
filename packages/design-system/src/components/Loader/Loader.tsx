import { FC } from 'react';
import { loader, wrapper } from './Loader.style';

export const Loader: FC = () => (
  <div css={wrapper} role="progressbar" aria-valuetext="Working…" aria-busy="true">
    <div css={loader}>
      <div></div>
      <div></div>
    </div>
  </div>
);
