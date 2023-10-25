import React, { useState, useEffect } from 'react';
import { useSearchFilmsQuery } from 'Host/ReduxHooks';
import { Displayer } from './FilmsDisplayer';

import { PaginableContainer, SearchForm } from 'DesignSystem/Components';
import { useDebounce } from 'DesignSystem/Hooks';

export const FilmsPage = () => {
  const [page, setPage] = useState<number>(1);
  const [search, setSearch] = useState<string>('');
  const debouncedSearchTerm = useDebounce(search, 1000);

  const { data, error, isLoading, isFetching } = useSearchFilmsQuery({
    page,
    search: debouncedSearchTerm
  });

  useEffect(() => {
    if (search !== '') {
      setPage(1);
    }
  }, [search]);

  return (
    <>
      <SearchForm {...{ setSearch }} />
      <PaginableContainer {...{ data, error, isLoading, isFetching, page, setPage, Displayer }} />
    </>
  );
};

export default FilmsPage;
