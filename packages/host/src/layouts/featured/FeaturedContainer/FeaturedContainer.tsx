import React, { FC, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Button } from 'DesignSystem/Components';

import type { RootState } from '../../../redux/store';
import { increment } from '../../../redux/features/popular/popular.slice';
import { Film, People, ResourceType, Vehicle } from '../../../services/swapi/types';

interface FeaturedContainerProps {
  children: React.ReactNode;
  resourceType: ResourceType;
  resource: Film | People | Vehicle;
}

export const FeaturedContainer: FC<FeaturedContainerProps> = ({ children }) => {
  const count = useSelector((state: RootState) => state.popular.value);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };

  useEffect(() => {
    dispatch(increment());
  }, []);

  return (
    <>
      <Button onClick={goBack}>Back</Button>

      {count}
      {children}
    </>
  );
};
