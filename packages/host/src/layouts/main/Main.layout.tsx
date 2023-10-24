import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from 'DesignSystem/Footer';
import Header from 'DesignSystem/Header';

import { mainLayout, layoutContainer, push } from './Main.style';

export const MainLayout = () => {
  return (
    <>
      <div css={layoutContainer}>
        <Header />
        <div css={mainLayout}>
          <Outlet />
        </div>
        <div css={push}></div>
      </div>
      <Footer />
    </>
  );
};
