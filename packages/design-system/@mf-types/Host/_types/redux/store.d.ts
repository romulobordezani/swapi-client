/// <reference types="redux-persist/types/types" />
/// <reference types="redux-persist" />
import { ThunkAction, Action } from '@reduxjs/toolkit';
export declare const store: import("@reduxjs/toolkit/dist/configureStore").ToolkitStore<any, import("redux").AnyAction, import("@reduxjs/toolkit").MiddlewareArray<[import("@reduxjs/toolkit").ThunkMiddleware<any, import("redux").AnyAction, undefined>, import("redux").Middleware<{}, import("@reduxjs/toolkit/query").RootState<{
    getFilmById: import("@reduxjs/toolkit/query").QueryDefinition<number, import("@reduxjs/toolkit/query").BaseQueryFn<string | import("@reduxjs/toolkit/query").FetchArgs, unknown, import("@reduxjs/toolkit/query").FetchBaseQueryError, {}, import("@reduxjs/toolkit/query").FetchBaseQueryMeta>, never, import("../services/swapi/types").Film, "swapi_api">;
    listFilms: import("@reduxjs/toolkit/query").QueryDefinition<{
        page: number;
    } | undefined, import("@reduxjs/toolkit/query").BaseQueryFn<string | import("@reduxjs/toolkit/query").FetchArgs, unknown, import("@reduxjs/toolkit/query").FetchBaseQueryError, {}, import("@reduxjs/toolkit/query").FetchBaseQueryMeta>, never, import("../services/swapi/types").PagedResults<import("../services/swapi/types").Film>, "swapi_api">;
    searchFilms: import("@reduxjs/toolkit/query").QueryDefinition<{
        page: number;
        search: string;
    }, import("@reduxjs/toolkit/query").BaseQueryFn<string | import("@reduxjs/toolkit/query").FetchArgs, unknown, import("@reduxjs/toolkit/query").FetchBaseQueryError, {}, import("@reduxjs/toolkit/query").FetchBaseQueryMeta>, never, import("../services/swapi/types").SearchResult<import("../services/swapi/types").Film>, "swapi_api">;
    getPeopleById: import("@reduxjs/toolkit/query").QueryDefinition<number, import("@reduxjs/toolkit/query").BaseQueryFn<string | import("@reduxjs/toolkit/query").FetchArgs, unknown, import("@reduxjs/toolkit/query").FetchBaseQueryError, {}, import("@reduxjs/toolkit/query").FetchBaseQueryMeta>, never, import("../services/swapi/types").People, "swapi_api">;
    listPeople: import("@reduxjs/toolkit/query").QueryDefinition<{
        page: number;
    } | undefined, import("@reduxjs/toolkit/query").BaseQueryFn<string | import("@reduxjs/toolkit/query").FetchArgs, unknown, import("@reduxjs/toolkit/query").FetchBaseQueryError, {}, import("@reduxjs/toolkit/query").FetchBaseQueryMeta>, never, import("../services/swapi/types").PagedResults<import("../services/swapi/types").People>, "swapi_api">;
    searchPeople: import("@reduxjs/toolkit/query").QueryDefinition<{
        page: number;
        search: string;
    }, import("@reduxjs/toolkit/query").BaseQueryFn<string | import("@reduxjs/toolkit/query").FetchArgs, unknown, import("@reduxjs/toolkit/query").FetchBaseQueryError, {}, import("@reduxjs/toolkit/query").FetchBaseQueryMeta>, never, import("../services/swapi/types").SearchResult<import("../services/swapi/types").People>, "swapi_api">;
    getPlanetById: import("@reduxjs/toolkit/query").QueryDefinition<number, import("@reduxjs/toolkit/query").BaseQueryFn<string | import("@reduxjs/toolkit/query").FetchArgs, unknown, import("@reduxjs/toolkit/query").FetchBaseQueryError, {}, import("@reduxjs/toolkit/query").FetchBaseQueryMeta>, never, import("../services/swapi/types").Planet, "swapi_api">;
    listPlanets: import("@reduxjs/toolkit/query").QueryDefinition<{
        page: number;
    } | undefined, import("@reduxjs/toolkit/query").BaseQueryFn<string | import("@reduxjs/toolkit/query").FetchArgs, unknown, import("@reduxjs/toolkit/query").FetchBaseQueryError, {}, import("@reduxjs/toolkit/query").FetchBaseQueryMeta>, never, import("../services/swapi/types").PagedResults<import("../services/swapi/types").Planet>, "swapi_api">;
    searchPlanets: import("@reduxjs/toolkit/query").QueryDefinition<{
        page: number;
        search: string;
    }, import("@reduxjs/toolkit/query").BaseQueryFn<string | import("@reduxjs/toolkit/query").FetchArgs, unknown, import("@reduxjs/toolkit/query").FetchBaseQueryError, {}, import("@reduxjs/toolkit/query").FetchBaseQueryMeta>, never, import("../services/swapi/types").SearchResult<import("../services/swapi/types").Planet>, "swapi_api">;
    getSpecieById: import("@reduxjs/toolkit/query").QueryDefinition<number, import("@reduxjs/toolkit/query").BaseQueryFn<string | import("@reduxjs/toolkit/query").FetchArgs, unknown, import("@reduxjs/toolkit/query").FetchBaseQueryError, {}, import("@reduxjs/toolkit/query").FetchBaseQueryMeta>, never, import("../services/swapi/types").Species, "swapi_api">;
    listSpecies: import("@reduxjs/toolkit/query").QueryDefinition<{
        page: number;
    } | undefined, import("@reduxjs/toolkit/query").BaseQueryFn<string | import("@reduxjs/toolkit/query").FetchArgs, unknown, import("@reduxjs/toolkit/query").FetchBaseQueryError, {}, import("@reduxjs/toolkit/query").FetchBaseQueryMeta>, never, import("../services/swapi/types").PagedResults<import("../services/swapi/types").Species>, "swapi_api">;
    searchSpecies: import("@reduxjs/toolkit/query").QueryDefinition<{
        page: number;
        search: string;
    }, import("@reduxjs/toolkit/query").BaseQueryFn<string | import("@reduxjs/toolkit/query").FetchArgs, unknown, import("@reduxjs/toolkit/query").FetchBaseQueryError, {}, import("@reduxjs/toolkit/query").FetchBaseQueryMeta>, never, import("../services/swapi/types").SearchResult<import("../services/swapi/types").Species>, "swapi_api">;
    getStarshipById: import("@reduxjs/toolkit/query").QueryDefinition<number, import("@reduxjs/toolkit/query").BaseQueryFn<string | import("@reduxjs/toolkit/query").FetchArgs, unknown, import("@reduxjs/toolkit/query").FetchBaseQueryError, {}, import("@reduxjs/toolkit/query").FetchBaseQueryMeta>, never, import("../services/swapi/types").Starship, "swapi_api">;
    listStarships: import("@reduxjs/toolkit/query").QueryDefinition<{
        page: number;
    } | undefined, import("@reduxjs/toolkit/query").BaseQueryFn<string | import("@reduxjs/toolkit/query").FetchArgs, unknown, import("@reduxjs/toolkit/query").FetchBaseQueryError, {}, import("@reduxjs/toolkit/query").FetchBaseQueryMeta>, never, import("../services/swapi/types").PagedResults<import("../services/swapi/types").Starship>, "swapi_api">;
    searchStarships: import("@reduxjs/toolkit/query").QueryDefinition<{
        page: number;
        search: string;
    }, import("@reduxjs/toolkit/query").BaseQueryFn<string | import("@reduxjs/toolkit/query").FetchArgs, unknown, import("@reduxjs/toolkit/query").FetchBaseQueryError, {}, import("@reduxjs/toolkit/query").FetchBaseQueryMeta>, never, import("../services/swapi/types").SearchResult<import("../services/swapi/types").Starship>, "swapi_api">;
    getVehicleById: import("@reduxjs/toolkit/query").QueryDefinition<number, import("@reduxjs/toolkit/query").BaseQueryFn<string | import("@reduxjs/toolkit/query").FetchArgs, unknown, import("@reduxjs/toolkit/query").FetchBaseQueryError, {}, import("@reduxjs/toolkit/query").FetchBaseQueryMeta>, never, import("../services/swapi/types").Vehicle, "swapi_api">;
    listVehicles: import("@reduxjs/toolkit/query").QueryDefinition<{
        page: number;
    } | undefined, import("@reduxjs/toolkit/query").BaseQueryFn<string | import("@reduxjs/toolkit/query").FetchArgs, unknown, import("@reduxjs/toolkit/query").FetchBaseQueryError, {}, import("@reduxjs/toolkit/query").FetchBaseQueryMeta>, never, import("../services/swapi/types").PagedResults<import("../services/swapi/types").Vehicle>, "swapi_api">;
    searchVehicles: import("@reduxjs/toolkit/query").QueryDefinition<{
        page: number;
        search: string;
    }, import("@reduxjs/toolkit/query").BaseQueryFn<string | import("@reduxjs/toolkit/query").FetchArgs, unknown, import("@reduxjs/toolkit/query").FetchBaseQueryError, {}, import("@reduxjs/toolkit/query").FetchBaseQueryMeta>, never, import("../services/swapi/types").SearchResult<import("../services/swapi/types").Vehicle>, "swapi_api">;
}, string, "swapi_api">, import("@reduxjs/toolkit").ThunkDispatch<any, any, import("redux").AnyAction>>]>>;
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>;
export declare const persister: import("redux-persist").Persistor;
