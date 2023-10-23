import { FC } from 'react';
import { css } from '@emotion/react';

import Button from '../Button/Button';

export interface PaginableContainerProps {
  data: {
    results: Record<string, string>[];
    previous: boolean;
    next: boolean;
  };
  error: Record<string, string>;
  isLoading: boolean;
  isFetching: boolean;
  setPage: (page: number) => void;
  page: number;
  Displayer: React.ComponentType<any>;
}

const PaginableContainer: FC<PaginableContainerProps> = ({
  data,
  error,
  isFetching,
  isLoading,
  setPage,
  page,
  Displayer
}) => {
  if (error) {
    return (
      <>
        <h2>Something went wrong while calling SWAPI</h2>
        <span>Error:</span>
        <pre>{JSON.stringify(error, null, 2)}</pre>
      </>
    );
  }

  if (isLoading || isFetching) {
    return <div>Loading</div>;
  }

  if (!data?.results || !data?.results.length) {
    return <div>No items.</div>;
  }

  return (
    <div
      css={css`
        padding: 30px;
      `}
    >
      {data?.results.map((item, id) => {
        return <Displayer key={item.title} {...{ item, id }} />;
      })}

      {data.previous && (
        <Button onClick={() => setPage(page - 1)} disabled={isFetching}>
          Previous
        </Button>
      )}
      {data.next && (
        <Button onClick={() => setPage(page + 1)} disabled={isFetching}>
          Next
        </Button>
      )}
    </div>
  );
};

export default PaginableContainer;
