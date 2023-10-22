export interface PagedResults<T> {
    page?: number;
    count: number;
    next?: string;
    previous: string;
    results: T[];
}
