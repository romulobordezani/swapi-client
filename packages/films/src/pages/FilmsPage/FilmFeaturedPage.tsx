import { useParams } from 'react-router-dom';
import { useGetFilmByIdQuery } from 'Host/ReduxHooks';
import { FeaturedContainer } from 'Host/FeaturedContainer';

import { getResourceImageUrl, getHostedPlaceHolderImageUrl } from 'DesignSystem/Utils';
import { Content, Loader } from 'DesignSystem/Components';
import { swYellow } from 'DesignSystem/Theme';
import { css } from '@emotion/react';

const FilmFeaturedPage = () => {
  const { id } = useParams();
  const idAsNumber = Number(id);
  const { data: film, isLoading, error } = useGetFilmByIdQuery(idAsNumber);

  const data = film;

  if (isLoading) {
    return <Loader />;
  }

  if (error || !data) {
    return <div>Error...</div>;
  }

  return (
    <FeaturedContainer resourceType={'films'} resource={data}>
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
          src={getResourceImageUrl('films', data.url)}
          alt={data?.title}
          onError={({ currentTarget }) => {
            currentTarget.onerror = null;
            currentTarget.src = getHostedPlaceHolderImageUrl();
          }}
        />
        <Content value={data.title} color={swYellow} />
        <Content label="Director" value={data.director} />
      </div>
    </FeaturedContainer>
  );
};

export default FilmFeaturedPage;
