import React from 'react';
import '@testing-library/jest-dom';
import { Header } from './Header';
import { screen, render, fireEvent } from '@testing-library/react';
import { Router, BrowserRouter } from 'react-router-dom';
import { createMemoryHistory } from 'history';

describe('<Header />', () => {
  it('should render without errors', async () => {
    render(<Header />, { wrapper: BrowserRouter });
    await screen.findByText('Star Wars Oracle');
  });

  it('should have all known NavLinks', async () => {
    render(<Header />, { wrapper: BrowserRouter });

    await screen.findByText('Star Wars Oracle');
    await screen.findByText('Pop');
    await screen.findByText('Films');
    await screen.findByText('People');
    await screen.findByText('Planets');
    await screen.findByText('Species');
    await screen.findByText('Starships');
    await screen.findByText('Vehicles');
  });

  it('NavLinks should navigate to the right path', async () => {
    const history = createMemoryHistory();

    render(
      <Router location={history.location} navigator={history}>
        <Header />
      </Router>
    );

    fireEvent.click(await screen.findByText(/Star Wars Oracle/i));
    expect(history.location.pathname).toEqual('/');

    fireEvent.click(await screen.findByText(/Pop/i));
    expect(history.location.pathname).toEqual('/');

    fireEvent.click(await screen.findByText(/Films/i));
    expect(history.location.pathname).toEqual('/films');

    fireEvent.click(await screen.findByText(/People/i));
    expect(history.location.pathname).toEqual('/people');

    fireEvent.click(await screen.findByText(/Planets/i));
    expect(history.location.pathname).toEqual('/planets');

    fireEvent.click(await screen.findByText(/Species/i));
    expect(history.location.pathname).toEqual('/species');

    fireEvent.click(await screen.findByText(/Starships/i));
    expect(history.location.pathname).toEqual('/starships');

    fireEvent.click(await screen.findByText(/Vehicles/i));
    expect(history.location.pathname).toEqual('/vehicles');
  });
});
