// cypress/integration/button_and_localStorage.spec.js

describe('Button click and LocalStorage Test', () => {

    beforeEach(() => {
      cy.visit('http://127.0.0.1:5500/Techstarter/softwaretesten/auto/index.html');  // Ändern Sie dies entsprechend der URL Ihrer Anwendung
    });
  
    it('should update localStorage when clicking the Panorama Roof button', () => {
      // Klicken Sie auf den Button, der den Text "Panoramadach (+3500)" enthält
      cy.get('.upgrade-button').contains('Panoramadach (+3500)').click();
  
      // Überprüfen Sie, ob der Wert im localStorage korrekt ist
      cy.window().then((win) => {
        const storedValue = win.localStorage.getItem('totalPrice');
        expect(storedValue).to.equal('3500');
      });
    });
  });
  