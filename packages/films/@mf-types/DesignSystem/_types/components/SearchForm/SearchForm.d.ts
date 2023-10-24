import { FC } from 'react';
export interface SearchFormProps {
    setSearch: (searchValue: string) => void;
}
declare const SearchForm: FC<SearchFormProps>;
export default SearchForm;
