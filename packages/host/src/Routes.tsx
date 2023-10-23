import React, { FC, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { MainLayout } from './layouts/main';

const FilmsPage = React.lazy(async () => import('Films/Page'));
import { ApiTest } from './components/ApiTest';
import HomePage from './pages/home/Home.page';

export const AppRoutes: FC = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route
            index
            element={
              <Suspense fallback={<div>Loading...</div>}>
                <HomePage />
              </Suspense>
            }
          />
          <Route
            path="films"
            element={
              <Suspense fallback={<div>Loading...</div>}>
                <FilmsPage />
              </Suspense>
            }
          />
          <Route
            path="starship"
            element={
              <Suspense fallback={<div>Loading...</div>}>
                <ApiTest />
              </Suspense>
            }
          />
          <Route path="*" element={<div>Route Not Found...</div>} />
        </Route>
      </Routes>
    </>
  );
};
