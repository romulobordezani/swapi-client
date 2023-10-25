import React, { FC, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { Button } from 'DesignSystem/Components';
import { countPageView } from '../../../redux/features/popular/popular.slice';
import { Film, People, ResourceType, Vehicle } from '../../../services/swapi/types';

interface FeaturedContainerProps {
  children: React.ReactNode;
  resourceType: ResourceType;
  resource: Film | People | Vehicle;
}

export const FeaturedContainer: FC<FeaturedContainerProps> = ({ children, resourceType, resource }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const goBack = (): void => navigate(-1);

  useEffect(() => {
    dispatch(countPageView({ resource, resourceType }));
  }, []);

  return (
    <>
      <Button onClick={goBack}>Back</Button>
      {children}
    </>
  );
};
