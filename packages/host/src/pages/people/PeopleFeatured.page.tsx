import { useParams } from 'react-router-dom';
import { useGetPeopleByIdQuery } from '../../redux/hooks';
import { FeaturedContainer } from '../../layouts/featured/FeaturedContainer';
import { ResourceType } from '../../services/swapi/types';

export const PeopleFeaturedPage = () => {
  const { id } = useParams();
  const idAsNumber = Number(id);
  const { data, isLoading, error } = useGetPeopleByIdQuery(idAsNumber);

  if (isLoading) {
    return 'Loading...';
  }

  if (error || !data) {
    return 'Error...';
  }

  return (
    <FeaturedContainer resourceType={ResourceType.People} resource={data}>
      LOL
    </FeaturedContainer>
  );
};
