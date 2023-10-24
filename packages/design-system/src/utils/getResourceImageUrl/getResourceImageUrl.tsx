const VISUAL_GUIDE_BASE_URL = 'https://starwars-visualguide.com/assets/img/';

const getIdFromUrl = (url: string): string | null => {
  const matches = url.match(/([a-z0-9]+)(?:\/?$)/);

  if (matches && matches?.length === 2) {
    return matches[1];
  }

  return null;
};

const RESOURCE_NAME: Record<string, string | null> = {
  films: 'films',
  people: 'characters',
  characters: 'planets',
  species: 'species',
  starship: 'starship',
  vehicles: 'vehicles',
  default: null
};

const getResourceName = (resourceType: string) => {
  return RESOURCE_NAME[resourceType] || RESOURCE_NAME.default;
};

export const getResourceImageUrl = (resourceType: string, url: string): string | null => {
  return `${VISUAL_GUIDE_BASE_URL}${getResourceName(resourceType)}/${getIdFromUrl(url)}.jpg`;
};
