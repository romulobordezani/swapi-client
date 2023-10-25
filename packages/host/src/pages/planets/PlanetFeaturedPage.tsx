import { useParams } from 'react-router-dom';
import { useGetPlanetByIdQuery } from '../../redux/hooks';
import { FeaturedContainer } from '../../layouts/featured/FeaturedContainer';
import { ResourceType } from '../../services/swapi/types';

import { getResourceImageUrl, getHostedPlaceHolderImageUrl } from 'DesignSystem/Utils';
import { Content, Loader } from 'DesignSystem/Components';
import { swYellow } from 'DesignSystem/Theme';
import { css } from '@emotion/react';

export const PlanetFeaturedPage = () => {
  const { id } = useParams();
  const idAsNumber = Number(id);
  const { data, isLoading, error } = useGetPlanetByIdQuery(idAsNumber);

  if (isLoading) {
    return <Loader />;
  }

  if (error || !data) {
    return <div>'Error...'</div>;
  }

  return (
    <FeaturedContainer resourceType={ResourceType.Planet} resource={data}>
      <div
        css={css`
          display: flex;
          justify-content: center;
          align-items: center;
          flex-direction: column;
          padding: 5%;
          margin-bottom: 50px;
          gap: 20px;

          img {
            max-width: 500px;
            border-radius: 50%;
          }
        `}
      >
        <img
          src={getResourceImageUrl(ResourceType.Planet, data.url)}
          alt={data?.name}
          onError={({ currentTarget }) => {
            currentTarget.onerror = null;
            currentTarget.src = getHostedPlaceHolderImageUrl();
          }}
        />
        <Content value={data.name} color={swYellow} />
        <Content label="Climate" value={data.climate} />
        <Content label="Gravity" value={data.gravity} />
        <Content label="Population" value={data.population} />
        <Content label="Terrain" value={data.terrain} />
      </div>
    </FeaturedContainer>
  );
};
