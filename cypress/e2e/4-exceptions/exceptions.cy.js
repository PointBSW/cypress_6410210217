const testDataExceptions = require("../../fixtures/exceptions.json")

import exceptionsPage from "../../support/page_object/exceptionsPage"
describe('Exception Handling Tests', () => {
    beforeEach(() => {
        cy.visit('https://practicetestautomation.com/practice-test-exceptions/');
    });

    it('tc-01: Should throw exception when trying to click a button with no input', () => {
        // คลิกปุ่ม Submit โดยไม่กรอกข้อมูล
        cy.get('#submit-button').click();
        // ตรวจสอบว่ามีข้อความข้อผิดพลาดแสดงขึ้น
        cy.get('#error-message').should('contain', 'Input required');
    });

    it('tc-02: Should handle incorrect input and display error', () => {
        // กรอกข้อมูลที่ไม่ถูกต้องลงในฟิลด์
        cy.get('#input-field').type('invalid input');
        cy.get('#submit-button').click();
        // ตรวจสอบข้อความข้อผิดพลาดสำหรับ input ที่ไม่ถูกต้อง
        cy.get('#error-message').should('contain', 'Invalid input');
    });

    it('tc-03: Should handle successful input and not display any error', () => {
        // กรอกข้อมูลที่ถูกต้อง
        cy.get('#input-field').type('correct input');
        cy.get('#submit-button').click();
        // ตรวจสอบว่าไม่มีข้อความข้อผิดพลาดแสดง
        cy.get('#error-message').should('not.exist');
        // ตรวจสอบข้อความสำเร็จ
        cy.get('#success-message').should('contain', 'Success!');
    });

    it('tc-04: Should display error when input is too short', () => {
        // กรอกข้อมูลที่สั้นเกินไป
        cy.get('#input-field').type('sh');
        cy.get('#submit-button').click();
        // ตรวจสอบข้อความข้อผิดพลาดสำหรับการกรอกข้อมูลสั้นเกินไป
        cy.get('#error-message').should('contain', 'Input is too short');
    });

    it('tc-05: Should handle page reload and maintain state', () => {
        // กรอกข้อมูลก่อน reload หน้า
        cy.get('#input-field').type('correct input');
        cy.reload();
        // ตรวจสอบว่าข้อมูลยังอยู่หลังจาก reload หน้า
        cy.get('#input-field').should('have.value', 'correct input');
    });
});

