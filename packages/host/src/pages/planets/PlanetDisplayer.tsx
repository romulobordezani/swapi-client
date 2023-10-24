import styled from '@emotion/styled';
import { FC } from 'react';

import { Planet, ResourceType } from '../../services/swapi/types';

import { getResourceImageUrl } from 'DesignSystem/Utils';

export interface PeopleDisplayerProps {
  index: number;
  item: Planet;
  className: string;
}

const PeopleDisplayer: FC<PeopleDisplayerProps> = ({ index, item, className }) => {
  return (
    <div key={index} className={className}>
      <img
        src={getResourceImageUrl(ResourceType.Planet, item.url)}
        alt={item?.name}
        onError={({ currentTarget }) => {
          currentTarget.onerror = null;
          currentTarget.src =
            'https://user-images.githubusercontent.com/237508/90246627-ecbda400-de2c-11ea-8bfb-b4307bfb975d.png';
        }}
      />
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
