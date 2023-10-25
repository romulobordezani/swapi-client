import React, { FC } from 'react';

import { searchFormContainer, input } from './SearchForm.style';

export interface SearchFormProps {
  setSearch: (searchValue: string) => void;
}

export const SearchForm: FC<SearchFormProps> = ({ setSearch }) => {
  return (
    <form autoComplete="on" css={searchFormContainer} onSubmit={(e) => e.preventDefault()}>
      <input
        css={input}
        type="text"
        name="search"
        placeholder="Search by name"
        onChange={(e) => setSearch(e.currentTarget.value)}
      />
    </form>
  );
};
