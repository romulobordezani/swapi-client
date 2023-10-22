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

  useGetPeopleByIdQuery,
  useListPeopleQuery,
  useLazySearchPeopleQuery,

  useGetPlanetByIdQuery,
  useListPlanetsQuery,
  useLazySearchPlanetsQuery,

  useGetSpecieByIdQuery,
  useListSpeciesQuery,
  useLazySearchSpeciesQuery,

  useGetStarshipByIdQuery,
  useListStarshipsQuery,
  useLazySearchStarshipsQuery,

  useGetVehicleByIdQuery,
  useListVehiclesQuery,
  useSearchVehiclesQuery
} = swapiV2;
