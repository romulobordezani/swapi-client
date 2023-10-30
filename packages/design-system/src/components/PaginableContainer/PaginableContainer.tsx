import { FC } from 'react';
import { css } from '@emotion/react';
import { FaBan } from 'react-icons/fa';
import { Button, Loader } from '..';
import { containerCss, masonryContainer, navButtonsCss } from './PaginableContainer.style';

export interface PaginableContainerProps {
  data:
    | {
        results: Record<string, string>[] | [];
        previous: boolean;
        next: boolean;
      }
    | undefined;
  error: Record<string, string> | undefined;
  isLoading: boolean;
  isFetching: boolean;
  setPage: (page: number) => void;
  page: number;
  Displayer: React.ComponentType<any>;
}

export const PaginableContainer: FC<PaginableContainerProps> = ({
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
    return <Loader />;
  }

  if (!data || !data?.results || !data?.results?.length) {
    return (
      <div
        css={css`
          padding: 30px;
          font-size: 1.3rem;
        `}
      >
        <FaBan /> No results.
      </div>
    );
  }

  const { next, previous, results } = data;

  return (
    <div css={containerCss}>
      <div css={masonryContainer}>
        {results?.map((item, index) => {
          return <Displayer key={item.url} {...{ item, index }} className="item" />;
        })}
      </div>

      <div css={navButtonsCss}>
        {!previous && <div className="navButtonsCss__emptySpacer" />}
        {previous && (
          <Button onClick={() => setPage(page - 1)} disabled={isFetching}>
            Previous Page
          </Button>
        )}
        {next && (
          <Button onClick={() => setPage(page + 1)} disabled={isFetching}>
            Next Page
          </Button>
        )}
        {!next && <div className="navButtonsCss__emptySpacer" />}
      </div>
    </div>
  );
};
