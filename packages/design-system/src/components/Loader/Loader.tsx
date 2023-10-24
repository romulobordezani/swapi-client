import { FC } from 'react';
import { loader, wrapper } from './Loader.style';

export const Loader: FC = () => (
  <div css={wrapper}>
    <div css={loader}>
      <div></div>
      <div></div>
    </div>
  </div>
);
