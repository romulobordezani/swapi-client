import styled from '@emotion/styled';
import { FC } from 'react';
import { useNavigate } from 'react-router-dom';

import { getResourceImageUrl, getIdFromUrl } from 'DesignSystem/Utils';

export interface FilmDisplayerProps {
  id: string;
  item: Record<string, any>;
  className: string;
}

const FilmDisplayer: FC<FilmDisplayerProps> = ({ item, className }) => {
  const navigate = useNavigate();

  return (
    <div
      className={className}
      onClick={() => {
        navigate(getIdFromUrl(item?.url));
      }}
    >
      <img src={getResourceImageUrl('films', item.url)} alt={item?.title} />
    </div>
  );
};

export const Displayer = styled(FilmDisplayer)`
  margin-bottom: 30px;
  background: #333;
  border-radius: 15px;
  opacity: 0.8;
  display: flex;
  flex-direction: row;
  overflow: hidden;
  align-items: center;

  img {
    max-width: 320px;
    cursor: pointer;
  }
`;
