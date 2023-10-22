import React from 'react';
import Button from './components/Button/Button';
import { Provider } from 'react-redux';
import { store } from 'Host/ReduxStore';

import { Global, css } from '@emotion/react';
import emotionNormalize from 'emotion-normalize';
import globalStyle from './global.style';

const App = () => {
  return (
    <>
      <Global
        styles={css`
          ${emotionNormalize}
          ${globalStyle}
        `}
      />
      <Provider store={store}>
        <h1>Design System</h1>
        <Button name="remote-button">button</Button>
      </Provider>
    </>
  );
};

export default App;
