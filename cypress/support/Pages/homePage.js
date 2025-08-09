class HomePage {
    // Locators
    getSuccessLogin = () => cy.get('#flash')
    successMessage = 'You logged into a secure area!'
    
    // Functions
    assertLoginSuccess = () => this.getSuccessLogin().should('be.visible').and('contain.text',this.successMessage)
}
export default HomePage;