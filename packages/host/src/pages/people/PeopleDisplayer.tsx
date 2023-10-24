import styled from '@emotion/styled';
import { FC } from 'react';

import { People, ResourceType } from '../../services/swapi/types';

import { getResourceImageUrl } from 'DesignSystem/Utils';

export interface PeopleDisplayerProps {
  index: number;
  item: People;
  className: string;
}

const PeopleDisplayer: FC<PeopleDisplayerProps> = ({ index, item, className }) => {
  return (
    <div key={index} className={className}>
      <img src={getResourceImageUrl(ResourceType.People, item.url)} alt={item?.name} />
      <span>{item?.name}</span>
    </div>
  );
};

export const Displayer = styled(PeopleDisplayer)`
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
