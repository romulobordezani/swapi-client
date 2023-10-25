import { Film, People, ResourceType, Vehicle } from '../../../../services/swapi/types';

export interface CountedResource {
  count: number;
  resourceType: ResourceType;
  id?: number;
  resource: Film | People | Vehicle;
}
