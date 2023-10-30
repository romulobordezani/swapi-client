import { screen, render, fireEvent } from '@testing-library/react';

import { merge } from 'lodash';

import { PaginableContainer, PaginableContainerProps } from './PaginableContainer';

const BASIC_PAGINABLE_DATA: PaginableContainerProps = {
  data: {
    results: [
      {
        name: 'Mocked Name',
        url: '/test/url/1'
      }
    ],
    previous: true,
    next: true
  },
  error: undefined,
  isLoading: false,
  isFetching: false,
  setPage: jest.fn(),
  page: 1,
  Displayer: ({ children }) => <>{children}</>
};

describe('<PaginableContainer />', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should render WITHOUT errors', async () => {
    render(<PaginableContainer {...BASIC_PAGINABLE_DATA} />);

    await screen.findByRole('button', { name: 'Previous Page' });
    await screen.findByRole('button', { name: 'Next Page' });
  });

  it('should show error message when ERRORED', async () => {
    const erroredPaginableDataMock = merge({}, BASIC_PAGINABLE_DATA) as PaginableContainerProps;

    erroredPaginableDataMock.error = {
      message: 'Fake error mocked'
    };

    render(<PaginableContainer {...erroredPaginableDataMock} />);

    await screen.findByText(/Error:/i);
  });

  it('should show a loading state while fetching', async () => {
    const loadingPaginableDataMock = merge({}, BASIC_PAGINABLE_DATA) as PaginableContainerProps;

    loadingPaginableDataMock.isLoading = true;

    render(<PaginableContainer {...loadingPaginableDataMock} />);

    await screen.findByRole('progressbar');
  });

  it('should render WITHOUT results', async () => {
    const noResultsPaginableDataMock = merge({}, BASIC_PAGINABLE_DATA) as PaginableContainerProps;

    noResultsPaginableDataMock.data = {
      results: [],
      next: false,
      previous: false
    };

    render(<PaginableContainer {...noResultsPaginableDataMock} />);
    await screen.findByText('No results.');
  });

  it('should paginate when Nav Buttons are clicked', async () => {
    render(<PaginableContainer {...BASIC_PAGINABLE_DATA} />);

    fireEvent.click(await screen.findByRole('button', { name: 'Previous Page' }));
    expect(BASIC_PAGINABLE_DATA.setPage).toHaveBeenCalledWith(0);

    fireEvent.click(await screen.findByRole('button', { name: 'Next Page' }));
    expect(BASIC_PAGINABLE_DATA.setPage).toHaveBeenCalledWith(2);
  });

  it('should add a css flex dumb element, when missing NEXT button', async () => {
    const withoutNextPaginableDataMock = merge({}, BASIC_PAGINABLE_DATA) as PaginableContainerProps;

    withoutNextPaginableDataMock.data = {
      ...BASIC_PAGINABLE_DATA.data,
      next: false
    } as PaginableContainerProps['data'];

    const { container } = render(<PaginableContainer {...withoutNextPaginableDataMock} />);

    expect(container.getElementsByClassName('navButtonsCss__emptySpacer').length).toBe(1);
  });

  it('should add a css flex dumb element, when missing PREVIOUS button', async () => {
    const withoutNextPaginableDataMock = merge({}, BASIC_PAGINABLE_DATA) as PaginableContainerProps;

    withoutNextPaginableDataMock.data = {
      ...BASIC_PAGINABLE_DATA.data,
      previous: false
    } as PaginableContainerProps['data'];

    const { container } = render(<PaginableContainer {...withoutNextPaginableDataMock} />);

    expect(container.getElementsByClassName('navButtonsCss__emptySpacer').length).toBe(1);
  });

  it('should add TWO css flex dumb elements, when missing PREVIOUS and NEXT button', async () => {
    const withoutNextPaginableDataMock = merge({}, BASIC_PAGINABLE_DATA) as PaginableContainerProps;

    withoutNextPaginableDataMock.data = {
      ...BASIC_PAGINABLE_DATA.data,
      previous: false,
      next: false
    } as PaginableContainerProps['data'];

    const { container } = render(<PaginableContainer {...withoutNextPaginableDataMock} />);

    expect(container.getElementsByClassName('navButtonsCss__emptySpacer').length).toBe(2);
  });
});
