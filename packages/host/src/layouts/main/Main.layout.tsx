import React from 'react';
import { Outlet } from 'react-router-dom';
import { Footer, Header } from 'DesignSystem/Components';

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
