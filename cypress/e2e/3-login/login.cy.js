// ดึงจาก commands.js
// describe('login', () => {
//     beforeEach(() => {
//         cy.visit('https://practicetestautomation.com/practice-test-login/')
//     })

//     it('tc-01', () => {
//         cy.login('student','Password123')
//         // const username = 'student';
//         // cy.get('#username').type(username)
//         // cy.get('#password').type('Password123')
//         // cy.get('#submit').click()
//         cy.get('.post-title').should('have.text', 'Logged In Successfully')
//         cy.url().should("include", "/logged-in-successfully/");
//     })

//     it('tc-02', () => {
//         cy.login('incorrectUser','Password123')
//         // cy.get('#username').type('incorrectUser')
//         // cy.get('#username').clear().type('incorrectUser')
//         // cy.get('#password').type('Password123')
//         // cy.get('#submit').click()
//         cy.get('#error').contains('Your username is invalid!')
//     })

//     it.only('tc-03', () => {
//         cy.login('student','incorrectPassword')
//         // cy.get('#username').type('student')
//         // cy.get('#password').type('incorrectPassword')
//         // cy.get('#submit').click()
//         cy.get("#error").then(($error) => {
//             expect($error.text()).to.equal("Your password is invalid!");
//         });
//     })

// })


// ดึงจาก login.json
// const testDataLogin = require("../../fixtures/login.json")
// describe('login', () => {
//     beforeEach(() => {
//         cy.visit('https://practicetestautomation.com/practice-test-login/')
//     })

//     it('tc-01', () => {
//         // cy.login('student','Password123')
//         cy.login(testDataLogin.username.positive, testDataLogin.password.positive)
//         // const username = 'student';
//         // cy.get('#username').type(username)
//         // cy.get('#password').type('Password123')
//         // cy.get('#submit').click()
//         cy.get('.post-title').should('have.text', 'Logged In Successfully')
//         cy.url().should("include", "/logged-in-successfully/");
//     })

//     it('tc-02', () => {
//         // cy.login('incorrectUser','Password123')
//         cy.login(testDataLogin.username.negative, testDataLogin.password.positive)
//         // cy.get('#username').type('incorrectUser')
//         // cy.get('#username').clear().type('incorrectUser')
//         // cy.get('#password').type('Password123')
//         // cy.get('#submit').click()
//         cy.get('#error').contains('Your username is invalid!')
//     })

//     it('tc-03', () => {
//         // cy.login('student','incorrectPassword')
//         cy.login(testDataLogin.username.positive, testDataLogin.password.negative)
//         // cy.get('#username').type('student')
//         // cy.get('#password').type('incorrectPassword')
//         // cy.get('#submit').click()
//         cy.get("#error").then(($error) => {
//             expect($error.text()).to.equal("Your password is invalid!");
//         });
//     })

// })


// ดึงจาก login.json and loginPage.js
const testDataLogin = require("../../fixtures/login.json")

import loginPage from "../../support/page_object/loginPage"
describe('login', () => {
    beforeEach(() => {
        cy.visit('https://practicetestautomation.com/practice-test-login/')
    })

    it('tc-01', () => {
        cy.login(testDataLogin.username.positive, testDataLogin.password.positive)
        loginPage.verifyLoginSucessText()
    })

    it('tc-02', () => {
        cy.login(testDataLogin.username.negative, testDataLogin.password.positive)
        loginPage.verifyLoginErrorUsername()
    })

    it('tc-03', () => {
        cy.login(testDataLogin.username.positive, testDataLogin.password.negative)
        loginPage.verifyLoginErrorPassword("Your password is invalid!")
    })

})