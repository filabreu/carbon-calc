describe('HousingPage', () => {
  beforeEach(() => {
    cy.visit('/');
    cy.get('input#householdPeople').type('4');

    cy.contains('Housing').click();
    cy.location('pathname').should('eq', '/housing');

    cy.get('input#naturalGas').type('450');
    cy.get('input#electricity').type('35');
    cy.get('input#heatingOil').type('18');
    cy.get('input#propane').type('9');
  });

  it('should set Housing form data and keep value across pages', () => {
    cy.contains('Transportation').click();
    cy.location('pathname').should('eq', '/transportation');

    cy.go('back');
    cy.location('pathname').should('eq', '/housing');

    cy.get('input#naturalGas').should('have.value', '450');
    cy.get('input#electricity').should('have.value', '35');
    cy.get('input#heatingOil').should('have.value', '18');
    cy.get('input#propane').should('have.value', '9');
  });

  it('carbon emissions should be calculated correctly', () => {
    // cy.contains(`Housing electricity emissions: ${3382} lbs / year`).should('exist');
    // cy.contains(`Housing natural gas emissions: ${1637} lbs / year`).should('exist');
    // cy.contains(`Housing heating oil emissions: ${1617} lbs / year`).should('exist');
    // cy.contains(`Housing propane emissions: ${454} lbs / year`).should('exist');
    cy.contains(`Housing total emissions: ${7090} lbs / year`).should('exist');
  });
});
