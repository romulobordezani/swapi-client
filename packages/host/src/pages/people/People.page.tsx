import React, { useState } from 'react';
import PaginableContainerProps from '@dsTypes/PaginableContainer';
import { useListPeopleQuery } from '../../redux/hooks';
import { Displayer } from './PeopleDisplayer';

const PaginableContainer = React.lazy(
  async () => import('DesignSystem/PaginableContainer')
) as typeof PaginableContainerProps;

export const PeoplePage = () => {
  const [page, setPage] = useState<number>(1);

  const { data, error, isLoading, isFetching } = useListPeopleQuery({
    page
  });

  return <PaginableContainer {...{ data, error, isLoading, isFetching, page, setPage, Displayer }} />;
};

export default PeoplePage;
