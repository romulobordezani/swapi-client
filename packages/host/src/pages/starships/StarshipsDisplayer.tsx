import styled from '@emotion/styled';
import { FC } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

import { Starship, ResourceType } from '../../services/swapi/types';
import { getResourceImageUrl, getHostedPlaceHolderImageUrl, getIdFromUrl } from 'DesignSystem/Utils';
import { Content } from 'DesignSystem/Components';
import { largeScreen, desktop, swYellow } from 'DesignSystem/Theme';

export interface StarshipsDisplayerProps {
  index: number;
  item: Starship;
  className: string;
}

const StarshipsDisplayer: FC<StarshipsDisplayerProps> = ({ item, className }) => {
  const navigate = useNavigate();

  return (
    <motion.div
      whileHover={{ scale: 1.1, rotate: 3 }}
      whileTap={{
        scale: 0.8,
        rotate: -10
      }}
    >
      <div
        className={className}
        onClick={() => {
          navigate(getIdFromUrl(item?.url));
        }}
      >
        <img
          src={getResourceImageUrl(ResourceType.Starship, item.url)}
          alt={item?.name}
          onError={({ currentTarget }) => {
            currentTarget.onerror = null;
            currentTarget.src = getHostedPlaceHolderImageUrl();
          }}
        />
        <div className="contentContainer">
          <Content value={item?.name} color={swYellow} />
          <Content label="Class" value={item?.starship_class} />
        </div>
      </div>
    </motion.div>
  );
};

export const Displayer = styled(StarshipsDisplayer)`
  margin-bottom: 30px;
  background: #333;
  border-radius: 15px;
  opacity: 0.9;
  display: flex;
  flex-direction: row;
  overflow: hidden;
  align-items: center;
  cursor: pointer;

  img {
    width: auto;
    height: 110px;
  }

  .contentContainer {
    display: flex;
    flex-direction: column;
    padding: 5%;
    gap: 10px;
    width: 100%;

    @media ${desktop} {
      padding: 5%;
      gap: 20px;
    }

    @media ${largeScreen} {
      padding: 5%;
      gap: 20px;
    }
  }
`;
