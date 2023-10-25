import React from 'react';
import '@testing-library/jest-dom';
import { Content } from './Content';
import { screen, render } from '@testing-library/react';

describe('<Content />', () => {
  it('should display Label and Value', async () => {
    const mockedLabel = 'Label Mock';
    const mockedValue = 'Value Mock';

    render(<Content label={mockedLabel} value={mockedValue} />);

    await screen.findByText(`${mockedLabel}:`);
    await screen.findByText(`${mockedValue}`);
  });

  it('should NOT display collon (:) when there is no label prop', async () => {
    const mockedValue = 'Value Mock';

    render(<Content value={mockedValue} />);

    expect(await screen.queryByText(':')).toBeNull();
    await screen.findByText(`${mockedValue}`);
  });
});
