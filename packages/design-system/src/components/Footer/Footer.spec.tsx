import React from 'react';
import '@testing-library/jest-dom';
import { Footer } from './Footer';
import { screen, render } from '@testing-library/react';

describe('<Footer />', () => {
  it('should render without errors', async () => {
    render(<Footer />);
    const content = await screen.findByRole('contentinfo');
    expect(content).toHaveTextContent('R&B');
  });
});
