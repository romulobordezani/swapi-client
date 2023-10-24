import { FC } from 'react';
export interface PaginableContainerProps {
    data: {
        results: Record<string, string>[];
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
export declare const PaginableContainer: FC<PaginableContainerProps>;
