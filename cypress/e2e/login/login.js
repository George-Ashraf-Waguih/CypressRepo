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
    
    it('TC_01_Successfull Login', function() {
        loginPage.enterUsername(this.user.validUser.username);
        loginPage.enterPassword(this.user.validUser.password);
        loginPage.clickLogin();
        homePage.assertLoginSuccess();
    });

    it('TC_02_Failed Login username error', function() {
        loginPage.enterUsername(this.user.invalidUser.username);
        loginPage.enterPassword(this.user.validUser.password);
        loginPage.clickLogin();
        loginPage.assertUsernameErrorMessageIsDisplayed();
    });

    it('TC_03_Failed Login username error', function() {
        loginPage.enterUsername(this.user.validUser.username);
        loginPage.enterPassword(this.user.invalidUser.password);
        loginPage.clickLogin();
        loginPage.assertPasswordErrorMessageIsDisplayed();
    });
});