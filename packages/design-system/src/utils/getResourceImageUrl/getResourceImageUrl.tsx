import { isEmpty } from 'lodash';
import { getHostedPlaceHolderImageUrl } from '../getHostedPlaceHolderImageUrl';

export const VISUAL_GUIDE_BASE_URL = 'https://starwars-visualguide.com/assets/img/';

export const getIdFromUrl = (url: string): string | null => {
  const matches = url.match(/([0-9]+)(?:\/?$)/);

  if (matches && matches?.length === 2) {
    return matches[1];
  }

  return null;
};

const RESOURCE_NAME: Record<string, string | null> = {
  films: 'films',
  people: 'characters',
  planets: 'planets',
  species: 'species',
  starships: 'starships',
  vehicles: 'vehicles',
  default: null
};

const getResourceName = (resourceType: string) => {
  return RESOURCE_NAME[resourceType];
};

export const getResourceImageUrl = (resourceType: string, url: string): string => {
  const id = getIdFromUrl(url);

  if (!id || !resourceType || isEmpty(resourceType)) {
    return getHostedPlaceHolderImageUrl();
  }

  return `${VISUAL_GUIDE_BASE_URL}${getResourceName(resourceType)}/${id}.jpg`;
};
