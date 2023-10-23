import React from 'react';
import ButtonProps from '@dsTypes/Button';
import { Global, css } from '@emotion/react';
import emotionNormalize from 'emotion-normalize';
import globalStyle from './global.style';

const Button = React.lazy(async () => import('DesignSystem/Button')) as typeof ButtonProps;

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
      <Button name="remote-button">Please, go to the host app 🍀</Button>
    </>
  );
};

export default App;
