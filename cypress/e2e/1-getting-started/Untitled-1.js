// cypress/integration/systemTest.spec.js

describe('User Experience Test', () => {
    it('should simulate the entire user experience', () => {
        // Besucht die Anmeldeseite
        cy.visit('/login');

        // Füllt das Anmeldeformular aus und sendet es ab
        cy.get('input[name=username]').type('username');
        cy.get('input[name=password]').type('password');
        cy.get('button[type=submit]').click();
       ...
        // Überprüft, ob der neue Post im Benutzerprofil sichtbar ist
        cy.get('.userPosts').should('contain', 'This is a test post!');
    });
});



