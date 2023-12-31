import React, { useState, useEffect } from 'react';
import { useSearchPlanetsQuery } from '../../redux/hooks';
import { Displayer } from './PlanetDisplayer';

import { useDebounce } from 'DesignSystem/Hooks';

import { PaginableContainer, SearchForm } from 'DesignSystem/Components';

export const PlanetPage = () => {
  const [page, setPage] = useState<number>(1);
  const [search, setSearch] = useState<string>('');
  const debouncedSearchTerm = useDebounce(search, 1000);

  useEffect(() => {
    if (search !== '') {
      setPage(1);
    }
  }, [search]);

  const { data, error, isLoading, isFetching } = useSearchPlanetsQuery({
    page,
    search: debouncedSearchTerm
  });

  return (
    <>
      <SearchForm {...{ setSearch }} />
      <PaginableContainer {...{ data, error, isLoading, isFetching, page, setPage, Displayer }} />
    </>
  );
};

export default PlanetPage;
