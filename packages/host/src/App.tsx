import React from 'react';
// import RemoteButtonProps from '@dsTypes/Button';
import { Provider } from 'react-redux';

// const RemoteButton = React.lazy(() => import('DesignSystem/Button')) as typeof RemoteButtonProps;

import RemoteButton from 'DesignSystem/Button';

import ErrorBoundary from './ErrorBoundary';
import { store } from './redux/store';

const App = () => {
  return (
    <Provider store={store}>
      <h1>Host Website</h1>
      <h2>this button was imported from Design System:</h2>
      <ErrorBoundary>
        <RemoteButton name="host-button">DS button</RemoteButton>
      </ErrorBoundary>
    </Provider>
  );
};

export default App;
