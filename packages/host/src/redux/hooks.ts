import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { swapiV2 } from '../services/swapi';
import type { RootState, AppDispatch } from './store';

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export const {
  useGetFilmByIdQuery,
  useListFilmsQuery,
  useLazySearchFilmsQuery,
  useSearchFilmsQuery,

  useGetPeopleByIdQuery,
  useListPeopleQuery,
  useLazySearchPeopleQuery,
  useSearchPeopleQuery,

  useGetPlanetByIdQuery,
  useListPlanetsQuery,
  useLazySearchPlanetsQuery,
  useSearchPlanetsQuery,

  useGetSpecieByIdQuery,
  useListSpeciesQuery,
  useLazySearchSpeciesQuery,
  useSearchSpeciesQuery,

  useGetStarshipByIdQuery,
  useListStarshipsQuery,
  useLazySearchStarshipsQuery,
  useSearchStarshipsQuery,

  useGetVehicleByIdQuery,
  useListVehiclesQuery,
  useSearchVehiclesQuery,
  useLazySearchVehiclesQuery
} = swapiV2;
