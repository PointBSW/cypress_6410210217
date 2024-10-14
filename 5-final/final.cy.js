const testDataLogin1 = require("../../fixtures/loginFinal.json")

import loginFinal from "../../support/page_object/loginFinal"
describe('loginFinal', () => {
    beforeEach(() => {
        cy.intercept('GET', 'https://298279967.log.optimizely.com/**', { statusCode: 200 }).as('optimizely');
        cy.visit('https://the-internet.herokuapp.com/login')
    })

    it('tc-01', () => {
        cy.login(testDataLogin1.username.positive, testDataLogin1.password.positive)
        loginFinal.verifyLoginSucessText()
    })

    it('tc-02', () => {
        cy.login(testDataLogin1.username.negative, testDataLogin1.password.positive)
        loginFinal.verifyLoginErrorUsername()
    })

    it('tc-03', () => {
        cy.login(testDataLogin1.username.positive, testDataLogin1.password.negative)
        loginFinal.verifyLoginErrorPassword("Your password is invalid!")
    })

})