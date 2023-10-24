import { TypedUseSelectorHook } from 'react-redux';
import type { RootState, AppDispatch } from './store';
export declare const useAppDispatch: () => AppDispatch;
export declare const useAppSelector: TypedUseSelectorHook<RootState>;
export declare const useGetFilmByIdQuery: import("@reduxjs/toolkit/dist/query/react/buildHooks").UseQuery<import("@reduxjs/toolkit/query").QueryDefinition<number, import("@reduxjs/toolkit/query").BaseQueryFn<string | import("@reduxjs/toolkit/query").FetchArgs, unknown, import("@reduxjs/toolkit/query").FetchBaseQueryError, {}, import("@reduxjs/toolkit/query").FetchBaseQueryMeta>, never, import("../services/swapi/types").Film, "swapi_api">>, useListFilmsQuery: import("@reduxjs/toolkit/dist/query/react/buildHooks").UseQuery<import("@reduxjs/toolkit/query").QueryDefinition<{
    page: number;
} | undefined, import("@reduxjs/toolkit/query").BaseQueryFn<string | import("@reduxjs/toolkit/query").FetchArgs, unknown, import("@reduxjs/toolkit/query").FetchBaseQueryError, {}, import("@reduxjs/toolkit/query").FetchBaseQueryMeta>, never, import("../services/swapi/types").PagedResults<import("../services/swapi/types").Film>, "swapi_api">>, useLazySearchFilmsQuery: import("@reduxjs/toolkit/dist/query/react/buildHooks").UseLazyQuery<import("@reduxjs/toolkit/query").QueryDefinition<{
    page: number;
    search: string;
}, import("@reduxjs/toolkit/query").BaseQueryFn<string | import("@reduxjs/toolkit/query").FetchArgs, unknown, import("@reduxjs/toolkit/query").FetchBaseQueryError, {}, import("@reduxjs/toolkit/query").FetchBaseQueryMeta>, never, import("../services/swapi/types").SearchResult<import("../services/swapi/types").Film>, "swapi_api">>, useSearchFilmsQuery: import("@reduxjs/toolkit/dist/query/react/buildHooks").UseQuery<import("@reduxjs/toolkit/query").QueryDefinition<{
    page: number;
    search: string;
}, import("@reduxjs/toolkit/query").BaseQueryFn<string | import("@reduxjs/toolkit/query").FetchArgs, unknown, import("@reduxjs/toolkit/query").FetchBaseQueryError, {}, import("@reduxjs/toolkit/query").FetchBaseQueryMeta>, never, import("../services/swapi/types").SearchResult<import("../services/swapi/types").Film>, "swapi_api">>, useGetPeopleByIdQuery: import("@reduxjs/toolkit/dist/query/react/buildHooks").UseQuery<import("@reduxjs/toolkit/query").QueryDefinition<number, import("@reduxjs/toolkit/query").BaseQueryFn<string | import("@reduxjs/toolkit/query").FetchArgs, unknown, import("@reduxjs/toolkit/query").FetchBaseQueryError, {}, import("@reduxjs/toolkit/query").FetchBaseQueryMeta>, never, import("../services/swapi/types").People, "swapi_api">>, useListPeopleQuery: import("@reduxjs/toolkit/dist/query/react/buildHooks").UseQuery<import("@reduxjs/toolkit/query").QueryDefinition<{
    page: number;
} | undefined, import("@reduxjs/toolkit/query").BaseQueryFn<string | import("@reduxjs/toolkit/query").FetchArgs, unknown, import("@reduxjs/toolkit/query").FetchBaseQueryError, {}, import("@reduxjs/toolkit/query").FetchBaseQueryMeta>, never, import("../services/swapi/types").PagedResults<import("../services/swapi/types").People>, "swapi_api">>, useLazySearchPeopleQuery: import("@reduxjs/toolkit/dist/query/react/buildHooks").UseLazyQuery<import("@reduxjs/toolkit/query").QueryDefinition<{
    page: number;
    search: string;
}, import("@reduxjs/toolkit/query").BaseQueryFn<string | import("@reduxjs/toolkit/query").FetchArgs, unknown, import("@reduxjs/toolkit/query").FetchBaseQueryError, {}, import("@reduxjs/toolkit/query").FetchBaseQueryMeta>, never, import("../services/swapi/types").SearchResult<import("../services/swapi/types").People>, "swapi_api">>, useSearchPeopleQuery: import("@reduxjs/toolkit/dist/query/react/buildHooks").UseQuery<import("@reduxjs/toolkit/query").QueryDefinition<{
    page: number;
    search: string;
}, import("@reduxjs/toolkit/query").BaseQueryFn<string | import("@reduxjs/toolkit/query").FetchArgs, unknown, import("@reduxjs/toolkit/query").FetchBaseQueryError, {}, import("@reduxjs/toolkit/query").FetchBaseQueryMeta>, never, import("../services/swapi/types").SearchResult<import("../services/swapi/types").People>, "swapi_api">>, useGetPlanetByIdQuery: import("@reduxjs/toolkit/dist/query/react/buildHooks").UseQuery<import("@reduxjs/toolkit/query").QueryDefinition<number, import("@reduxjs/toolkit/query").BaseQueryFn<string | import("@reduxjs/toolkit/query").FetchArgs, unknown, import("@reduxjs/toolkit/query").FetchBaseQueryError, {}, import("@reduxjs/toolkit/query").FetchBaseQueryMeta>, never, import("../services/swapi/types").Planet, "swapi_api">>, useListPlanetsQuery: import("@reduxjs/toolkit/dist/query/react/buildHooks").UseQuery<import("@reduxjs/toolkit/query").QueryDefinition<number | void, import("@reduxjs/toolkit/query").BaseQueryFn<string | import("@reduxjs/toolkit/query").FetchArgs, unknown, import("@reduxjs/toolkit/query").FetchBaseQueryError, {}, import("@reduxjs/toolkit/query").FetchBaseQueryMeta>, never, import("../services/swapi/types").PagedResults<import("../services/swapi/types").Planet>, "swapi_api">>, useLazySearchPlanetsQuery: import("@reduxjs/toolkit/dist/query/react/buildHooks").UseLazyQuery<import("@reduxjs/toolkit/query").QueryDefinition<{
    page: number;
    search: string;
}, import("@reduxjs/toolkit/query").BaseQueryFn<string | import("@reduxjs/toolkit/query").FetchArgs, unknown, import("@reduxjs/toolkit/query").FetchBaseQueryError, {}, import("@reduxjs/toolkit/query").FetchBaseQueryMeta>, never, import("../services/swapi/types").SearchResult<import("../services/swapi/types").Planet>, "swapi_api">>, useGetSpecieByIdQuery: import("@reduxjs/toolkit/dist/query/react/buildHooks").UseQuery<import("@reduxjs/toolkit/query").QueryDefinition<number, import("@reduxjs/toolkit/query").BaseQueryFn<string | import("@reduxjs/toolkit/query").FetchArgs, unknown, import("@reduxjs/toolkit/query").FetchBaseQueryError, {}, import("@reduxjs/toolkit/query").FetchBaseQueryMeta>, never, import("../services/swapi/types").Species, "swapi_api">>, useListSpeciesQuery: import("@reduxjs/toolkit/dist/query/react/buildHooks").UseQuery<import("@reduxjs/toolkit/query").QueryDefinition<number | void, import("@reduxjs/toolkit/query").BaseQueryFn<string | import("@reduxjs/toolkit/query").FetchArgs, unknown, import("@reduxjs/toolkit/query").FetchBaseQueryError, {}, import("@reduxjs/toolkit/query").FetchBaseQueryMeta>, never, import("../services/swapi/types").PagedResults<import("../services/swapi/types").Species>, "swapi_api">>, useLazySearchSpeciesQuery: import("@reduxjs/toolkit/dist/query/react/buildHooks").UseLazyQuery<import("@reduxjs/toolkit/query").QueryDefinition<{
    page: number;
    search: string;
}, import("@reduxjs/toolkit/query").BaseQueryFn<string | import("@reduxjs/toolkit/query").FetchArgs, unknown, import("@reduxjs/toolkit/query").FetchBaseQueryError, {}, import("@reduxjs/toolkit/query").FetchBaseQueryMeta>, never, import("../services/swapi/types").SearchResult<import("../services/swapi/types").Species>, "swapi_api">>, useGetStarshipByIdQuery: import("@reduxjs/toolkit/dist/query/react/buildHooks").UseQuery<import("@reduxjs/toolkit/query").QueryDefinition<number, import("@reduxjs/toolkit/query").BaseQueryFn<string | import("@reduxjs/toolkit/query").FetchArgs, unknown, import("@reduxjs/toolkit/query").FetchBaseQueryError, {}, import("@reduxjs/toolkit/query").FetchBaseQueryMeta>, never, import("../services/swapi/types").Starship, "swapi_api">>, useListStarshipsQuery: import("@reduxjs/toolkit/dist/query/react/buildHooks").UseQuery<import("@reduxjs/toolkit/query").QueryDefinition<number | void, import("@reduxjs/toolkit/query").BaseQueryFn<string | import("@reduxjs/toolkit/query").FetchArgs, unknown, import("@reduxjs/toolkit/query").FetchBaseQueryError, {}, import("@reduxjs/toolkit/query").FetchBaseQueryMeta>, never, import("../services/swapi/types").PagedResults<import("../services/swapi/types").Starship>, "swapi_api">>, useLazySearchStarshipsQuery: import("@reduxjs/toolkit/dist/query/react/buildHooks").UseLazyQuery<import("@reduxjs/toolkit/query").QueryDefinition<{
    page: number;
    search: string;
}, import("@reduxjs/toolkit/query").BaseQueryFn<string | import("@reduxjs/toolkit/query").FetchArgs, unknown, import("@reduxjs/toolkit/query").FetchBaseQueryError, {}, import("@reduxjs/toolkit/query").FetchBaseQueryMeta>, never, import("../services/swapi/types").SearchResult<import("../services/swapi/types").Starship>, "swapi_api">>, useSearchStarshipsQuery: import("@reduxjs/toolkit/dist/query/react/buildHooks").UseQuery<import("@reduxjs/toolkit/query").QueryDefinition<{
    page: number;
    search: string;
}, import("@reduxjs/toolkit/query").BaseQueryFn<string | import("@reduxjs/toolkit/query").FetchArgs, unknown, import("@reduxjs/toolkit/query").FetchBaseQueryError, {}, import("@reduxjs/toolkit/query").FetchBaseQueryMeta>, never, import("../services/swapi/types").SearchResult<import("../services/swapi/types").Starship>, "swapi_api">>, useGetVehicleByIdQuery: import("@reduxjs/toolkit/dist/query/react/buildHooks").UseQuery<import("@reduxjs/toolkit/query").QueryDefinition<number, import("@reduxjs/toolkit/query").BaseQueryFn<string | import("@reduxjs/toolkit/query").FetchArgs, unknown, import("@reduxjs/toolkit/query").FetchBaseQueryError, {}, import("@reduxjs/toolkit/query").FetchBaseQueryMeta>, never, import("../services/swapi/types").Vehicle, "swapi_api">>, useListVehiclesQuery: import("@reduxjs/toolkit/dist/query/react/buildHooks").UseQuery<import("@reduxjs/toolkit/query").QueryDefinition<number | void, import("@reduxjs/toolkit/query").BaseQueryFn<string | import("@reduxjs/toolkit/query").FetchArgs, unknown, import("@reduxjs/toolkit/query").FetchBaseQueryError, {}, import("@reduxjs/toolkit/query").FetchBaseQueryMeta>, never, import("../services/swapi/types").PagedResults<import("../services/swapi/types").Vehicle>, "swapi_api">>, useSearchVehiclesQuery: import("@reduxjs/toolkit/dist/query/react/buildHooks").UseQuery<import("@reduxjs/toolkit/query").QueryDefinition<{
    page: number;
    search: string;
}, import("@reduxjs/toolkit/query").BaseQueryFn<string | import("@reduxjs/toolkit/query").FetchArgs, unknown, import("@reduxjs/toolkit/query").FetchBaseQueryError, {}, import("@reduxjs/toolkit/query").FetchBaseQueryMeta>, never, import("../services/swapi/types").SearchResult<import("../services/swapi/types").Vehicle>, "swapi_api">>;
