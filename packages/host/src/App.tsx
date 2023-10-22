import React from 'react';
import { Provider } from 'react-redux';
import { Global, css } from '@emotion/react';
import emotionNormalize from 'emotion-normalize';

import globalStyle from 'DesignSystem/GlobalStyle';
import ErrorBoundary from './ErrorBoundary';
import { store } from './redux/store';
import { ApiTest } from './components/ApiTest';

const App = () => {
  return (
    <>
      <Global
        styles={css`
          ${emotionNormalize} ${globalStyle}
        `}
      />
      <Provider store={store}>
        <ErrorBoundary>
          <ApiTest />
        </ErrorBoundary>
      </Provider>
    </>
  );
};

export default App;
