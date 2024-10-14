describe('login', () => {
    beforeEach(() => {
        cy.visit('https://petstore.octoperf.com/actions/Account.action')
    })

    it.only('tc-01', () => {
        const username = 'j2ee';

        // Use a different selector, just in case ID is incorrect
        cy.get('input[name="username"]', { timeout: 10000 }).should('exist').type(username);
        cy.get('input[name="password"]').type('j2ee');
        cy.get('[type="submit"]').click();

        // Check that the URL has changed to Catalog.action
        cy.url().should("include", "/Catalog.action");
    })

    it('tc-02', () => {
        cy.login('incorrectUser','Password123')
        // cy.get('#username').type('incorrectUser')
        // cy.get('#username').clear().type('incorrectUser')
        // cy.get('#password').type('Password123')
        // cy.get('#submit').click()
        cy.get('#error').contains('Your username is invalid!')
    })

    it('tc-03', () => {
        cy.login('student','incorrectPassword')
        // cy.get('#username').type('student')
        // cy.get('#password').type('incorrectPassword')
        // cy.get('#submit').click()
        cy.get("#error").then(($error) => {
            expect($error.text()).to.equal("Your password is invalid!");
        });
    })

})