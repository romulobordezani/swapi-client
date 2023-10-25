import { FC } from 'react';

import { content } from './Content.style';

export interface ContentProps {
  label: string;
  value: string;
  color: string;
}

export const Content: FC<ContentProps> = ({ label, value, color }) => {
  return (
    <div css={content}>
      <div className="content__info">
        {!!label && (
          <span className="content__info__label" style={{ color }}>
            {label}:&nbsp;
          </span>
        )}
        <span className="content__info__value" style={{ color }}>
          {value}
        </span>
      </div>
    </div>
  );
};
