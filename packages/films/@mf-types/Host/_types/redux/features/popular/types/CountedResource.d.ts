import { Film, People, Planet, ResourceType, Species, Starship, Vehicle } from '../../../../services/swapi/types';
export interface CountedResource {
    count: number;
    resourceType: ResourceType;
    id?: number;
    resource: Film | People | Planet | Species | Starship | Vehicle;
}
