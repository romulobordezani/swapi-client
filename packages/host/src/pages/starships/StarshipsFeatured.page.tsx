import { useParams } from 'react-router-dom';
import { useGetStarshipByIdQuery } from '../../redux/hooks';
import { FeaturedContainer } from '../../layouts/featured/FeaturedContainer';
import { ResourceType } from '../../services/swapi/types';

import { getResourceImageUrl, getHostedPlaceHolderImageUrl } from 'DesignSystem/Utils';
import { Content, Loader } from 'DesignSystem/Components';
import { swYellow } from 'DesignSystem/Theme';
import { css } from '@emotion/react';

export const StarshipsFeaturedPage = () => {
  const { id } = useParams();
  const idAsNumber = Number(id);
  const { data, isLoading, error } = useGetStarshipByIdQuery(idAsNumber);

  if (isLoading) {
    return <Loader />;
  }

  if (error || !data) {
    return <div>'Error...'</div>;
  }

  return (
    <FeaturedContainer resourceType={ResourceType.Starship} resource={data}>
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
          }
        `}
      >
        <img
          src={getResourceImageUrl(ResourceType.Starship, data.url)}
          alt={data?.name}
          onError={({ currentTarget }) => {
            currentTarget.onerror = null;
            currentTarget.src = getHostedPlaceHolderImageUrl();
          }}
        />
        <Content value={data.name} color={swYellow} />
        <Content label="Crew" value={data?.crew} />
        <Content label="Hyperdrive Rating" value={data?.hyperdrive_rating} />
      </div>
    </FeaturedContainer>
  );
};
