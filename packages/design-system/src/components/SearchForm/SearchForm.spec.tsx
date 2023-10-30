import React from 'react';
import '@testing-library/jest-dom';
import { SearchForm } from './SearchForm';
import { screen, render, fireEvent, act } from '@testing-library/react';

describe('<SearchForm />', () => {
  it('should render without erros', () => {
    const setSearch = jest.fn();

    render(<SearchForm {...{ setSearch }} />);
  });

  it('should call setSearch callback when input value changes', async () => {
    const setSearch = jest.fn();

    render(<SearchForm {...{ setSearch }} />);
    const mockedValue = 'mocked value';

    const input = screen.getByLabelText('Search by name');
    fireEvent.change(input, { target: { value: mockedValue } });
    expect(setSearch).toHaveBeenCalledWith(mockedValue);
  });

  it('should remain in the same page if Enter key is hit', async () => {
    const setSearch = jest.fn();

    render(<SearchForm {...{ setSearch }} />);

    await act(async () => {
      fireEvent.submit(await screen.findByRole('form'));
    });

    expect(setSearch).not.toHaveBeenCalled();
  });
});
