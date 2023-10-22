import { Resource } from './Resource';
import { ResourceUrl } from './ResourceUrl';
export interface Planet extends Resource {
    name: string;
    rotation_period: string;
    orbital_period: string;
    diameter: string;
    climate: string;
    gravity: string;
    terrain: string;
    surface_water: string;
    population: string;
    residents: ResourceUrl[];
    films: ResourceUrl[];
}
