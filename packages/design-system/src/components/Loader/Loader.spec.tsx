import React from 'react';
import '@testing-library/jest-dom';
import { Loader } from './Loader';
import { screen, render } from '@testing-library/react';

describe('<Footer />', () => {
  it('should render without errors', async () => {
    render(<Loader />);
    await screen.findByRole('progressbar');
  });
});
