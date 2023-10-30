import React from 'react';
import { screen, render } from '@testing-library/react';
import '@testing-library/jest-dom';

import App from './App';

describe('App', () => {
  it('should render without errors', async () => {
    render(<App />);
    await screen.findByText('Design System Package');
  });
});
