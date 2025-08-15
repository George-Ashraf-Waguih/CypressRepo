/// <reference types="cypress"/>
import LoginPage from "../../support/Pages/loginPage";
import HomePage from "../../support/Pages/homePage";


describe('Login Tests', () => {

    const loginPage = new LoginPage()
    const homePage = new HomePage();

    beforeEach(() => {
        cy.fixture('userCredentials').as('user')
        cy.visit('/login')
    });
    
    it('TC_01_Successfull Login', { tags:['smoke', 'regression']}, function() {
        // login is a custom command added in commands.js file
        cy.login(this.user.validUser.username, this.user.validUser.password)
        homePage.assertLoginSuccess();
    });

    it('TC_02_Failed Login username error', { tags:['regression']}, function() {
        cy.login(this.user.invalidUser.username, this.user.validUser.password)
        loginPage.assertUsernameErrorMessageIsDisplayed();
    });

    it('TC_03_Failed Login password error', { tags:['regression']}, function() {
        cy.login(this.user.validUser.username, this.user.invalidUser.password)
        loginPage.assertPasswordErrorMessageIsDisplayed();
    });
});