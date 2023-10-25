import React, { FC, useEffect, useState } from 'react';
import { useSearchSpeciesQuery } from '../../redux/hooks';
import { Displayer } from './SpeciesDisplayer';
import { useDebounce } from 'DesignSystem/Hooks';

import { PaginableContainer, SearchForm } from 'DesignSystem/Components';

export const SpeciesPage: FC = () => {
  const [page, setPage] = useState<number>(1);
  const [search, setSearch] = useState<string>('');
  const debouncedSearchTerm = useDebounce(search, 1000);

  useEffect(() => {
    if (search !== '') {
      setPage(1);
    }
  }, [search]);

  const { data, error, isLoading, isFetching } = useSearchSpeciesQuery({
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
