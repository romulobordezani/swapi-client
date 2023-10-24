import styled from '@emotion/styled';
import { FC } from 'react';

import { Film } from '@hostTypes/SwapiTypes';
import { getResourceImageUrl } from 'DesignSystem/Utils';

export interface FilmDisplayerProps {
  id: string;
  item: Film;
  className: string;
}

const FilmDisplayer: FC<FilmDisplayerProps> = ({ item, className }) => {
  return (
    <div className={className}>
      <img src={getResourceImageUrl('films', item.url)} alt={item?.title} />
      <span>{item?.title}</span>
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
    max-width: 300px;
  }
`;
