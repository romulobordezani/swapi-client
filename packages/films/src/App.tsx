import React from 'react';
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
      <h1>Films Package</h1>
    </>
  );
};

export default App;
