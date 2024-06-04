describe('HousingPage', () => {
  beforeEach(() => {
    cy.visit('/');
    cy.contains('Housing').click();
    cy.location('pathname').should('eq', '/housing');
  });

  it('should set Housing form data and keep value across pages', () => {
    cy.get('input#naturalGas').type('12000');
    cy.get('input#electricity').type('3000');
    cy.get('input#heatingOil').type('9000');
    cy.get('input#propane').type('600');

    cy.contains('Transportation').click();
    cy.location('pathname').should('eq', '/transportation');

    cy.go('back');
    cy.location('pathname').should('eq', '/housing');

    cy.get('input#naturalGas').should('have.value', '12000');
    cy.get('input#electricity').should('have.value', '3000');
    cy.get('input#heatingOil').should('have.value', '9000');
    cy.get('input#propane').should('have.value', '600');
  });
});
