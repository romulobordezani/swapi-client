import { getHostedPlaceHolderImageUrl } from '../getHostedPlaceHolderImageUrl';
import { VISUAL_GUIDE_BASE_URL, getResourceImageUrl } from './getResourceImageUrl';
import { expect, test } from '@jest/globals';

describe('getResourceImageUrl()', () => {
  test.each([
    {
      resourceType: 'people',
      url: 'https://swapi.dev/api/people/5/',
      expected: `${VISUAL_GUIDE_BASE_URL}characters/5.jpg`
    },
    {
      resourceType: 'planets',
      url: 'https://swapi.dev/api/planets/1/',
      expected: `${VISUAL_GUIDE_BASE_URL}planets/1.jpg`
    },
    {
      resourceType: 'films',
      url: 'https://swapi.dev/api/films/5/',
      expected: `${VISUAL_GUIDE_BASE_URL}films/5.jpg`
    },
    {
      resourceType: 'species',
      url: 'https://swapi.dev/api/species/2/',
      expected: `${VISUAL_GUIDE_BASE_URL}species/2.jpg`
    },
    {
      resourceType: 'starships',
      url: 'https://swapi.dev/api/starships/5/',
      expected: `${VISUAL_GUIDE_BASE_URL}starships/5.jpg`
    },
    {
      resourceType: 'vehicles',
      url: 'https://swapi.dev/api/vehicles/5/',
      expected: `${VISUAL_GUIDE_BASE_URL}vehicles/5.jpg`
    }
  ])(
    'should mount a working url to Star Wars Visual Guide images to resourceType $resourceType',
    ({ resourceType, url, expected }) => {
      expect(getResourceImageUrl(resourceType, url)).toEqual(expected);
    }
  );

  it('should return getHostedPlaceHolderImageUrl from a bad SWAPI url', () => {
    expect(getResourceImageUrl('people', 'https://swapi.dev/api/people')).toEqual(getHostedPlaceHolderImageUrl());
  });

  it('should return getHostedPlaceHolderImageUrl from an empty resourceType', () => {
    expect(getResourceImageUrl('', 'https://swapi.dev/api/people')).toEqual(getHostedPlaceHolderImageUrl());

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore -- Forcing errors on mutation tests
    expect(getResourceImageUrl(undefined, 'https://swapi.dev/api/people')).toEqual(getHostedPlaceHolderImageUrl());

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore -- Forcing errors on mutation tests
    expect(getResourceImageUrl(null, 'https://swapi.dev/api/people')).toEqual(getHostedPlaceHolderImageUrl());
  });
});
