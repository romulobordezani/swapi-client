import React, { FC } from 'react';
import { Film, People, Planet, ResourceType, Species, Starship, Vehicle } from '../../../services/swapi/types';
interface FeaturedContainerProps {
    children: React.ReactNode;
    resourceType: ResourceType;
    resource: Film | People | Planet | Species | Starship | Vehicle;
}
export declare const FeaturedContainer: FC<FeaturedContainerProps>;
export {};
