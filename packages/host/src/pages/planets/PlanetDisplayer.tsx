import styled from '@emotion/styled';
import { FC } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

import { Planet, ResourceType } from '../../services/swapi/types';

import { getResourceImageUrl, getIdFromUrl, getHostedPlaceHolderImageUrl } from 'DesignSystem/Utils';
import { Content } from 'DesignSystem/Components';

export interface PeopleDisplayerProps {
  index: number;
  item: Planet;
  className: string;
}

const PeopleDisplayer: FC<PeopleDisplayerProps> = ({ index, item, className }) => {
  const navigate = useNavigate();

  return (
    <div>
      <motion.div
        whileHover={{ scale: 1.2, rotate: 10 }}
        whileTap={{
          scale: 0.8,
          rotate: -10
        }}
      >
        <div
          key={index}
          className={className}
          onClick={() => {
            navigate(getIdFromUrl(item?.url));
          }}
        >
          <img
            src={getResourceImageUrl(ResourceType.Planet, item.url)}
            alt={item?.name}
            onError={({ currentTarget }) => {
              currentTarget.onerror = null;
              currentTarget.src = getHostedPlaceHolderImageUrl();
            }}
          />
        </div>
      </motion.div>
      <Content value={item?.name} />
    </div>
  );
};

export const Displayer = styled(PeopleDisplayer)`
  margin-bottom: 30px;
  background: #333;
  border-radius: 50%;
  opacity: 0.8;
  display: flex;
  flex-direction: row;
  overflow: hidden;
  align-items: center;

  img {
    max-width: 320px;
    height: 320px;
    cursor: pointer;
  }
`;
