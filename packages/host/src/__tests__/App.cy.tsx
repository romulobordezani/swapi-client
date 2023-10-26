/// <reference types="@testing-library/cypress" />

import React from 'react';
import App from '../App';
import { mount } from 'cypress/react18';

describe('App', () => {
  it('should have remote button', async () => {
    mount(<App />);
    cy.findByRole('link', { name: 'Pop' }).should('exist');
  });
});
