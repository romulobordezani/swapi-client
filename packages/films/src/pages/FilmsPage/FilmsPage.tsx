import React, { useState } from 'react';
import PaginableContainerProps from '@dsTypes/PaginableContainer';
import { useListFilmsQuery } from 'Host/ReduxHooks';
import { Displayer } from './FilmsDisplayer';

const PaginableContainer = React.lazy(
  async () => import('DesignSystem/PaginableContainer')
) as typeof PaginableContainerProps;

export const FilmsPage = () => {
  const [page, setPage] = useState<number>(1);

  const { data, error, isLoading, isFetching } = useListFilmsQuery({
    page
  });

  return <PaginableContainer {...{ data, error, isLoading, isFetching, page, setPage, Displayer }} />;
};

export default FilmsPage;
