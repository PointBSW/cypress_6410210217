import { loginPet } from '../support/loginPet';

describe('Advanced Pet Store Login Tests', () => {
    beforeEach(() => {
        // Visit the login page before each test
        loginPet.visit();
    });

    // Data-driven testing with multiple credentials
    const testCases = [
        { username: Cypress.env('validUsername'), password: Cypress.env('validPassword'), expectedResult: 'success' },
        { username: 'invalidUser', password: 'invalidPass', expectedResult: 'failure' },
        { username: 'j2ee', password: 'invalidPass', expectedResult: 'failure' }
    ];

    testCases.forEach((testCase) => {
        it(`should ${testCase.expectedResult === 'success' ? 'successfully' : 'unsuccessfully'} login with username: ${testCase.username}`, () => {
            // Fill in the login form
            loginPet.fillUsername(testCase.username);
            loginPet.fillPassword(testCase.password);
            loginPet.submit();

            // Verify based on the expected result
            if (testCase.expectedResult === 'success') {
                loginPet.checkUrlForCatalog();
            } else {
                loginPage.checkLoginError();
            }
        });
    });

    it('should login using custom command', () => {
        // Use the custom command to login
        cy.login(Cypress.env('validUsername'), Cypress.env('validPassword'));

        // Verify successful login
        loginPage.checkUrlForCatalog();
    });

    it('should verify login form validation', () => {
        // Attempt to login without entering credentials
        loginPage.submit();

        // Check if the required fields give validation errors (you can adapt this depending on how the validation works)
        cy.get('input[name="username"]:invalid').should('exist');
        cy.get('input[name="password"]:invalid').should('exist');
    });
});