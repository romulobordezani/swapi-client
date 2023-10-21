import React from 'react';
import '@testing-library/jest-dom';
import Button from './Button';
import { screen, render } from '@testing-library/react';

describe('<Button />', () => {
  it('should work on Module Federation', async () => {
    const buttonName = 'Click Me';
    render(<Button name="test-button">{buttonName}</Button>);
    expect(await screen.findByRole('button', { name: buttonName })).toBeInTheDocument();
  });
});
