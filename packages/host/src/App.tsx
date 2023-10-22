import React from 'react';
import { Provider } from 'react-redux';
import { Global, css } from '@emotion/react';
import emotionNormalize from 'emotion-normalize';

import RemoteButton from 'DesignSystem/Button';
import globalStyle from 'DesignSystem/GlobalStyle';
import ErrorBoundary from './ErrorBoundary';
import { store } from './redux/store';

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
          <RemoteButton name="host-button">DS button</RemoteButton>
        </ErrorBoundary>
      </Provider>
    </>
  );
};

export default App;
