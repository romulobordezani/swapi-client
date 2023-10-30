import React, { FC, Suspense } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import { MainLayout } from './layouts/main';

const FilmsPage = React.lazy(async () => import('Films/Page'));
const FilmFeaturedPage = React.lazy(async () => import('Films/FilmFeaturedPage'));

import { Loader } from 'DesignSystem/Components';

import HomePage from './pages/home/Home.page';
import { PeoplePage, PeopleFeaturedPage } from './pages/people';
import PlanetPage from './pages/planets/PlanetPage';
import { PlanetFeaturedPage } from './pages/planets/PlanetFeaturedPage';
import { SpeciesPage, SpeciesFeaturedPage } from './pages/species';
import { StarshipsFeaturedPage, StarshipsPage } from './pages/starships';
import { VehiclesFeaturedPage, VehiclesPage } from './pages/vehicles';

export const LocationDisplay = () => {
  const location = useLocation();
  return <div data-testid="location-display">{location.pathname}</div>;
};

export const AppRoutes: FC = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route
          index
          element={
            <Suspense fallback={<Loader />}>
              <HomePage />
            </Suspense>
          }
        />
        <Route
          path="films"
          element={
            <Suspense fallback={<Loader />}>
              <FilmsPage />
            </Suspense>
          }
        />

        <Route
          path="films/:id"
          element={
            <Suspense fallback={<Loader />}>
              <FilmFeaturedPage />
            </Suspense>
          }
        />

        <Route
          path="people/:id"
          element={
            <Suspense fallback={<Loader />}>
              <PeopleFeaturedPage />
            </Suspense>
          }
        />

        <Route
          path="people"
          element={
            <Suspense fallback={<Loader />}>
              <PeoplePage />
            </Suspense>
          }
        />

        <Route
          path="planets"
          element={
            <Suspense fallback={<Loader />}>
              <PlanetPage />
            </Suspense>
          }
        />

        <Route
          path="planets/:id"
          element={
            <Suspense fallback={<Loader />}>
              <PlanetFeaturedPage />
            </Suspense>
          }
        />

        <Route
          path="species"
          element={
            <Suspense fallback={<Loader />}>
              <SpeciesPage />
            </Suspense>
          }
        />

        <Route
          path="species/:id"
          element={
            <Suspense fallback={<Loader />}>
              <SpeciesFeaturedPage />
            </Suspense>
          }
        />

        <Route
          path="starships"
          element={
            <Suspense fallback={<Loader />}>
              <StarshipsPage />
            </Suspense>
          }
        />

        <Route
          path="starships/:id"
          element={
            <Suspense fallback={<Loader />}>
              <StarshipsFeaturedPage />
            </Suspense>
          }
        />

        <Route
          path="vehicles"
          element={
            <Suspense fallback={<Loader />}>
              <VehiclesPage />
            </Suspense>
          }
        />

        <Route
          path="vehicles/:id"
          element={
            <Suspense fallback={<Loader />}>
              <VehiclesFeaturedPage />
            </Suspense>
          }
        />

        {/** TODO - Add a better 404 Not found  */}
        <Route
          path="*"
          element={
            <Suspense fallback={<Loader />}>
              <div>Route Not Found...</div>
            </Suspense>
          }
        />
      </Route>
    </Routes>
  );
};
