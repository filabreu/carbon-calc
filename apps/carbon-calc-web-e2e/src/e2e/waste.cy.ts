describe('WastePage', () => {
  beforeEach(() => {
    cy.visit('/');
    cy.contains('Waste').click();
    cy.location('pathname').should('eq', '/waste');
  });

  it('should set Waste form data and keep value across pages', () => {
    cy.get('input#metal').check();
    cy.get('input#plastic').check();
    cy.get('input#paper').check();
    cy.get('input#glass').check();

    cy.contains('Housing').click();
    cy.location('pathname').should('eq', '/housing');

    cy.go('back');
    cy.location('pathname').should('eq', '/waste');

    cy.get('input#metal').should('be.checked');
    cy.get('input#plastic').should('be.checked');
    cy.get('input#paper').should('be.checked');
    cy.get('input#glass').should('be.checked');
  });
});
