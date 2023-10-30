import { getHostedPlaceHolderImageUrl } from './getHostedPlaceHolderImageUrl';

describe('getHostedPlaceHolderImageUrl()', () => {
  it('should return a string to being used at <img src /> ', () => {
    expect(typeof getHostedPlaceHolderImageUrl()).toBe('string');
  });

  it('should start with https://', () => {
    expect(getHostedPlaceHolderImageUrl()).toMatch(/^https:\/\//);
  });
});
