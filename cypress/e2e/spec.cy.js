describe('Button and Price Tests', () => {

  it('should have the correct text and attribute for the Upgrade button', () => {
    cy.visit('http://127.0.0.1:5500/Techstarter/softwaretesten/auto/index.html');  // Ändern Sie dies entsprechend der URL Ihrer Anwendung
    cy.get('.upgrade-button').contains('Panoramadach (+3500)').should('have.attr', 'data-cost', '3500');
  });

});
