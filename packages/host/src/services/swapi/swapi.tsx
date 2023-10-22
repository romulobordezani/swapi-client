import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { ResourceType, Film, PagedResults, Vehicle, People, Planet, Species, Starship, SearchResult } from '../types';

export const swapiV2 = createApi({
  reducerPath: `swapi_api`,
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://swapi.dev/api/'
  }),
  endpoints: (builder) => ({
    getFilmById: builder.query<Film, number>({
      query: (id) => `${ResourceType.Film}/${id}`
    }),

    listFilms: builder.query<PagedResults<Film>, number | void>({
      query: (page = 1) => `${ResourceType.Film}/?page=${page}`
    }),

    searchFilms: builder.query<SearchResult<Film>, SearchResult<Film>['params']>({
      query: ({ page, search }) => `${ResourceType.Film}/?search=${search}&page=${page}`
    }),

    // ------------
    getPeopleById: builder.query<People, number>({
      query: (id) => `${ResourceType.People}/${id}`
    }),

    listPeople: builder.query<PagedResults<People>, number | void>({
      query: (page = 1) => `${ResourceType.People}/?page=${page}`
    }),

    searchPeople: builder.query<SearchResult<People>, SearchResult<People>['params']>({
      query: ({ page, search }) => `${ResourceType.People}/?search=${search}&page=${page}`
    }),

    // ------------
    getPlanetById: builder.query<Planet, number>({
      query: (id) => `${ResourceType.Planet}/${id}`
    }),

    listPlanets: builder.query<PagedResults<Planet>, number | void>({
      query: (page = 1) => `${ResourceType.Planet}/?page=${page}`
    }),

    searchPlanets: builder.query<SearchResult<Planet>, SearchResult<Planet>['params']>({
      query: ({ page, search }) => `${ResourceType.Planet}/?search=${search}&page=${page}`
    }),

    // ------------
    getSpecieById: builder.query<Species, number>({
      query: (id) => `${ResourceType.Species}/${id}`
    }),

    listSpecies: builder.query<PagedResults<Species>, number | void>({
      query: (page = 1) => `${ResourceType.Species}/?page=${page}`
    }),

    searchSpecies: builder.query<SearchResult<Species>, SearchResult<Species>['params']>({
      query: ({ page, search }) => `${ResourceType.Species}/?search=${search}&page=${page}`
    }),

    // ------------
    getStarshipById: builder.query<Starship, number>({
      query: (id) => `${ResourceType.Starship}/${id}`
    }),

    listStarships: builder.query<PagedResults<Starship>, number | void>({
      query: (page = 1) => `${ResourceType.Starship}/?page=${page}`
    }),

    searchStarships: builder.query<SearchResult<Starship>, SearchResult<Starship>['params']>({
      query: ({ page, search }) => `${ResourceType.Starship}/?search=${search}&page=${page}`
    }),

    // ------------
    getVehicleById: builder.query<Vehicle, number>({
      query: (id) => `${ResourceType.Vehicle}/${id}`
    }),

    listVehicles: builder.query<PagedResults<Vehicle>, number | void>({
      query: (page = 1) => `${ResourceType.Vehicle}/?page=${page}`
    }),

    searchVehicles: builder.query<SearchResult<Vehicle>, SearchResult<Vehicle>['params']>({
      query: ({ page, search }) => `${ResourceType.Vehicle}/?search=${search}&page=${page}`
    })
  })
});
