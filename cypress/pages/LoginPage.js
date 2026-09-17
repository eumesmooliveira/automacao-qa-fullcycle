class LoginPage {
  visit() {
    cy.visit('https://www.saucedemo.com/');
  }

  fillUsername(username) {
    cy.get('#user-name')
      .should('be.visible')
      .clear()
      .type(username);
  }

  fillPassword(password) {
    cy.get('#password')
      .should('be.visible')
      .clear()
      .type(password, { log: false });
  }

  clickLogin() {
    cy.get('#login-button')
      .should('be.visible')
      .click();
  }

  login(username = 'standard_user', password = 'secret_sauce') {
    this.visit();
    this.fillUsername(username);
    this.fillPassword(password);
    this.clickLogin();
  }

  validateErrorMessage(message) {
    cy.get('[data-test="error"]')
      .should('be.visible')
      .and('contain', message);
  }
}

export default new LoginPage();