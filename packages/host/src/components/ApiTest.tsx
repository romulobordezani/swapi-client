import { useState } from 'react';
import { css } from '@emotion/react';

import { useSearchStarshipsQuery } from '../redux/hooks';
import Button from 'DesignSystem/Button';

export const ApiTest = () => {
  const [page, setPage] = useState(1);
  const { data, error, isLoading, isFetching } = useSearchStarshipsQuery({
    page,
    search: 'falcon'
  });

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
    return (
      <div
        css={css`
          padding: 30px;
        `}
      >
        Loading
      </div>
    );
  }

  if (!data?.results || !data?.results.length) {
    return (
      <div
        css={css`
          padding: 30px;
        `}
      >
        No items.
      </div>
    );
  }

  return (
    <div
      css={css`
        padding: 30px;
      `}
    >
      <ul>
        {data?.results.map(({ name }) => {
          return <li key={name}>{name}</li>;
        })}
      </ul>

      {data.previous && (
        <Button onClick={() => setPage(page - 1)} disabled={isFetching}>
          ◀️ Previous
        </Button>
      )}
      {data.next && (
        <Button onClick={() => setPage(page + 1)} disabled={isFetching}>
          Next ▶️
        </Button>
      )}
    </div>
  );
};
