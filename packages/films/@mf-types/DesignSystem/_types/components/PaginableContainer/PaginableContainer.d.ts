import { FC } from 'react';
import { PagedResults } from '@hostTypes/SwapiTypes';
export interface PaginableContainerProps {
    data: {
        results: PagedResults<Record<string, string>[]>;
        previous: boolean;
        next: boolean;
    } | undefined;
    error: Record<string, string>;
    isLoading: boolean;
    isFetching: boolean;
    setPage: (page: number) => void;
    page: number;
    Displayer: React.ComponentType<any>;
}
declare const PaginableContainer: FC<PaginableContainerProps>;
export default PaginableContainer;
