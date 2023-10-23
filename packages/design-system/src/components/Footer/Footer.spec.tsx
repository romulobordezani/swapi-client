import React from 'react';
import '@testing-library/jest-dom';
import Footer from './Footer';
import { screen, render } from '@testing-library/react';

describe('<Footer />', () => {
  it('should work on Module Federation', async () => {
    render(<Footer />);
    const content = await screen.findByRole('contentinfo');
    expect(content).toHaveTextContent('Romulo Bordezani');
  });
});
