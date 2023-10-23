import React, { FC, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { MainLayout } from './layouts/main';

const FilmsPage = React.lazy(async () => import('Films/Page'));
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
              <Suspense fallback={<div>{/** TODO - Add a better loding  */}Loading...</div>}>
                <FilmsPage />
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
