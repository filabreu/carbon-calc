describe('TransportationPage', () => {
  beforeEach(() => {
    cy.visit('/');
    cy.contains('Transportation').click();
    cy.location('pathname').should('eq', '/transportation');
  });

  it('should set Transportation form data and keep value across pages', () => {
    cy.get('input#milesDriven').type('75');
    cy.get('input#milesPerGallon').type('22');
    cy.get('select#fuelType').select('gasoline');

    cy.contains('Waste').click();
    cy.location('pathname').should('eq', '/waste');

    cy.go('back');
    cy.location('pathname').should('eq', '/transportation');

    cy.get('input#milesDriven').should('have.value', '75');
    cy.get('input#milesPerGallon').should('have.value', '22');
    cy.get('select#fuelType').should('have.value', 'gasoline');
  });
});
