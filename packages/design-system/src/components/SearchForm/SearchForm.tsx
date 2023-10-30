import React, { FC, FormEvent } from 'react';

import { searchFormContainer, input } from './SearchForm.style';

export interface SearchFormProps {
  setSearch: (searchValue: string) => void;
}

export const SearchForm: FC<SearchFormProps> = ({ setSearch }) => {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <form autoComplete="on" css={searchFormContainer} onSubmit={handleSubmit} role="form">
      <input
        css={input}
        type="text"
        name="search"
        placeholder="Search by name"
        aria-label="Search by name"
        onChange={(e) => setSearch(e.currentTarget.value)}
      />
    </form>
  );
};
