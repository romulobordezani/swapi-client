import React from 'react';
import { Provider } from 'react-redux';
import { Global, css } from '@emotion/react';
import emotionNormalize from 'emotion-normalize';
import { BrowserRouter } from 'react-router-dom';

import globalStyle from 'DesignSystem/GlobalStyle';
import ErrorBoundary from './ErrorBoundary';
import { store } from './redux/store';
import { AppRoutes } from './Routes';

const App = () => {
  return (
    <>
      <Global
        styles={css`
          ${emotionNormalize} ${globalStyle}
        `}
      />
      <BrowserRouter>
        <Provider store={store}>
          <ErrorBoundary>
            <AppRoutes />
          </ErrorBoundary>
        </Provider>
      </BrowserRouter>
    </>
  );
};

export default App;
