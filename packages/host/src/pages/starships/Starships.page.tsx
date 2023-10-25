import React, { FC, useEffect, useState } from 'react';
import { useSearchStarshipsQuery } from '../../redux/hooks';
import { Displayer } from './StarshipsDisplayer';
import { useDebounce } from 'DesignSystem/Hooks';

import { PaginableContainer, SearchForm } from 'DesignSystem/Components';

export const StarshipsPage: FC = () => {
  const [page, setPage] = useState<number>(1);
  const [search, setSearch] = useState<string>('');
  const debouncedSearchTerm = useDebounce(search, 1000);

  useEffect(() => {
    if (search !== '') {
      setPage(1);
    }
  }, [search]);

  const { data, error, isLoading, isFetching } = useSearchStarshipsQuery({
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
