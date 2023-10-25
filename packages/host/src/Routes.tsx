import React, { FC, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { MainLayout } from './layouts/main';

const FilmsPage = React.lazy(async () => import('Films/Page'));
import { Loader } from 'DesignSystem/Components';

import HomePage from './pages/home/Home.page';
import { PeoplePage, PeopleFeaturedPage } from './pages/people';
import PlanetPage from './pages/planets/PlanetPage';

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
          path="films"
          element={
            <Suspense fallback={<Loader />}>
              <FilmsPage />
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
