import React, { FC } from 'react';
import { Film, People, ResourceType, Vehicle } from '../../../services/swapi/types';
interface FeaturedContainerProps {
    children: React.ReactNode;
    resourceType: ResourceType;
    resource: Film | People | Vehicle;
}
export declare const FeaturedContainer: FC<FeaturedContainerProps>;
export {};
