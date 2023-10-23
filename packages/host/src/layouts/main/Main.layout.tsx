import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from 'DesignSystem/Footer';
import Header from 'DesignSystem/Header';

import { mainLayout } from '../Main.style';

export const MainLayout = () => {
  return (
    <>
      <Header />
      <div css={mainLayout}>
        <Outlet />
      </div>
      <Footer />
    </>
  );
};
