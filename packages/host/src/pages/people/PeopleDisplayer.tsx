import styled from '@emotion/styled';
import { FC } from 'react';

import { People, ResourceType } from '../../services/swapi/types';
import { getResourceImageUrl, getHostedPlaceHolderImageUrl, getIdFromUrl } from 'DesignSystem/Utils';
import { Content } from 'DesignSystem/Components';
import { largeScreen, desktop, swYellow } from 'DesignSystem/Theme';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

export interface PeopleDisplayerProps {
  index: number;
  item: People;
  className: string;
}

const PeopleDisplayer: FC<PeopleDisplayerProps> = ({ item, className }) => {
  const navigate = useNavigate();

  return (
    <motion.div
      whileHover={{ scale: 1.2, rotate: 10 }}
      whileTap={{
        scale: 0.8,
        rotate: -10,
        borderRadius: '100%'
      }}
    >
      <div
        className={className}
        onClick={() => {
          navigate(getIdFromUrl(item?.url));
        }}
      >
        <img
          src={getResourceImageUrl(ResourceType.People, item.url)}
          alt={item?.name}
          onError={({ currentTarget }) => {
            currentTarget.onerror = null;
            currentTarget.src = getHostedPlaceHolderImageUrl();
          }}
        />
        <div className="contentContainer">
          <Content value={item?.name} color={swYellow} />
          <Content label="Birth Year" value={item?.birth_year} />
          <Content label="Gender" value={item?.gender} />
        </div>
      </div>
    </motion.div>
  );
};

export const Displayer = styled(PeopleDisplayer)`
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
    height: 200px;
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
