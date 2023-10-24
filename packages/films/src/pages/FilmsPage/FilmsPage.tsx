import React, { useState } from 'react';
import { useListFilmsQuery } from 'Host/ReduxHooks';
import { Displayer } from './FilmsDisplayer';

import { PaginableContainer } from 'DesignSystem/Components';

export const FilmsPage = () => {
  const [page, setPage] = useState<number>(1);

  const { data, error, isLoading, isFetching } = useListFilmsQuery({
    page
  });

  return <PaginableContainer {...{ data, error, isLoading, isFetching, page, setPage, Displayer }} />;
};

export default FilmsPage;
