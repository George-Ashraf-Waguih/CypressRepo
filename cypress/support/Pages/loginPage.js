class LoginPage {
    
    // Locators
    getUsernameField = () => cy.get('#username');
    getPasswordField = () => cy.get('#password');
    getLoginButton = () => cy.contains('button','Login');
    errorBanner = () => cy.get('#flash')
    usernameErrorText = 'Your username is invalid!'
    passwordErrorText = 'Your password is invalid!'

    // Functions
    enterUsername = (username) => this.getUsernameField().type(username)
    enterPassword = (password) => this.getPasswordField().type(password)
    clickLogin = () => this.getLoginButton().click()
    assertUsernameErrorMessageIsDisplayed = ()=> this.errorBanner().should('be.visible').and('contain.text',this.usernameErrorText)
    assertPasswordErrorMessageIsDisplayed = ()=> this.errorBanner().should('be.visible').and('contain.text',this.passwordErrorText)
}
export default LoginPage;