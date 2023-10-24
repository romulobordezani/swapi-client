import React, { FC, useEffect, useState } from 'react';
import { useSearchPeopleQuery } from '../../redux/hooks';
import { Displayer } from './PeopleDisplayer';
import { useDebounce } from 'DesignSystem/Hooks';

import { PaginableContainer, SearchForm } from 'DesignSystem/Components';

export const PeoplePage: FC = () => {
  const [page, setPage] = useState<number>(1);
  const [search, setSearch] = useState<string>('');
  const debouncedSearchTerm = useDebounce(search, 1000);

  useEffect(() => {
    if (search !== '') {
      setPage(1);
    }
  }, [search]);

  const { data, error, isLoading, isFetching } = useSearchPeopleQuery({
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
