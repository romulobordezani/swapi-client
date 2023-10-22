import Button from './components/Button/Button';
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
      <h1>Design System</h1>
      <Button name="remote-button">button</Button>
    </>
  );
};

export default App;
