import { getGreeting } from '../support/app.po';

describe('carbon-calc-web-e2e', () => {
  beforeEach(() => cy.visit('/'));

  it('should display welcome message', () => {
    getGreeting().contains(/What is your carbon footprint?/);
  });
});
