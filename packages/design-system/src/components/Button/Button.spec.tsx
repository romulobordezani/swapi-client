import React from 'react';
import '@testing-library/jest-dom';
import { Button } from './Button';
import { screen, render, fireEvent } from '@testing-library/react';

describe('<Button />', () => {
  it('should work on Module Federation', async () => {
    const buttonName = 'Click Me';
    render(<Button name="test-button">{buttonName}</Button>);
    expect(await screen.findByRole('button', { name: buttonName })).toBeInTheDocument();
  });

  it('should execute callback on click', async () => {
    const callback = jest.fn();
    const buttonName = 'Click Me 2';

    render(
      <Button name="test-button" onClick={callback}>
        {buttonName}
      </Button>
    );

    const button = await screen.findByRole('button', { name: buttonName });
    fireEvent.click(button);
    expect(callback).toHaveBeenCalled();
  });

  it('should drill down custom props', async () => {
    const testId = 'test-id-value';

    render(
      <Button name="test-button" data-testid={testId}>
        Mocked Button
      </Button>
    );

    await screen.findByTestId(testId);
  });
});
