import { FC } from 'react';

import { content } from './Content.style';

export interface ContentProps {
  label: string;
  value: string;
}

export const Content: FC<ContentProps> = ({ label, value }) => {
  return (
    <div css={content}>
      <div className="content__info">
        <div className="content__info__label">{label}:</div>
        <div className="content__info__value">{value}</div>
      </div>
    </div>
  );
};
