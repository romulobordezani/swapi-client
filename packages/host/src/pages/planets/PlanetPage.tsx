import React, { useState } from 'react';
import { useListPlanetsQuery } from '../../redux/hooks';
import { Displayer } from './PlanetDisplayer';

import { PaginableContainer } from 'DesignSystem/Components';

export const PlanetPage = () => {
  const [page, setPage] = useState<number>(1);

  const { data, error, isLoading, isFetching } = useListPlanetsQuery({
    page
  });

  return <PaginableContainer {...{ data, error, isLoading, isFetching, page, setPage, Displayer }} />;
};

export default PlanetPage;
