import React, { FC, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { countPageView } from '../../../redux/features/popular/popular.slice';
import { Film, People, Planet, ResourceType, Species, Starship, Vehicle } from '../../../services/swapi/types';

interface FeaturedContainerProps {
  children: React.ReactNode;
  resourceType: ResourceType;
  resource: Film | People | Planet | Species | Starship | Vehicle;
}

export const FeaturedContainer: FC<FeaturedContainerProps> = ({ children, resourceType, resource }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(countPageView({ resource, resourceType }));
  }, []);

  return <>{children}</>;
};
