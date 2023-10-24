import React, { FC, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { MainLayout } from './layouts/main';

const FilmsPage = React.lazy(async () => import('Films/Page'));
const Loader = React.lazy(async () => import('DesignSystem/Loader'));

import HomePage from './pages/home/Home.page';
import { PeoplePage } from './pages/people';

export const AppRoutes: FC = () => {
  return (
    <>
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
            path="people"
            element={
              <Suspense fallback={<Loader />}>
                <PeoplePage />
              </Suspense>
            }
          />
          {/** TODO - Add a better 404 Not found  */}
          <Route path="*" element={<div>Route Not Found...</div>} />
        </Route>
      </Routes>
    </>
  );
};
