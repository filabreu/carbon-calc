describe('StartPage', () => {
  beforeEach(() => cy.visit('/'));

  it('should set number of people in household and keep value across pages', () => {
    cy.get('input#householdPeople').type('4');

    cy.contains('Housing').click();
    cy.location('pathname').should('eq', '/housing');

    cy.go('back');
    cy.location('pathname').should('eq', '/');

    cy.get('input#householdPeople').should('have.value', '4');
  });
});
