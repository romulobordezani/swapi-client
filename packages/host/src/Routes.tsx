import React, { FC, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { MainLayout } from './layouts';

const FilmsPage = React.lazy(async () => import('Films/Page'));
import { ApiTest } from './components/ApiTest';

export const AppRoutes: FC = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route
            index
            element={
              <Suspense fallback={<div>Loading...</div>}>
                <ApiTest />
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
          <Route path="*" element={<div>Route Not Found...</div>} />
        </Route>
      </Routes>
    </>
  );
};
