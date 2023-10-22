import { PagedResults } from './PagedResults';
export interface SearchResult<T> extends Omit<PagedResults<T>, 'page'> {
    params: {
        page: number;
        search: string;
    };
}
