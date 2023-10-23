import React, { useState } from 'react';
import PaginableContainerProps from '@dsTypes/PaginableContainer';
import { useSearchFilmsQuery } from 'Host/ReduxHooks';
import { Displayer } from './FilmsDisplayer';

const PaginableContainer = React.lazy(
  async () => import('DesignSystem/PaginableContainer')
) as typeof PaginableContainerProps;

export const FilmsPage = () => {
  const [page, setPage] = useState<number>(1);

  const { data, error, isLoading, isFetching } = useSearchFilmsQuery({
    page,
    search: 'a'
  });

  return <PaginableContainer {...{ data, error, isLoading, isFetching, page, setPage, Displayer }} />;
};

export default FilmsPage;
