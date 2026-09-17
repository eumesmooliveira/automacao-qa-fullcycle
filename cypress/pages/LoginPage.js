class LoginPage {
  visit() {
    cy.visit('https://www.saucedemo.com/');
  }

  fillUsername(username) {
    cy.get('#user-name').type(username);
  }

  fillPassword(password) {
    cy.get('#password').type(password);
  }

  clickLogin() {
    cy.get('#login-button').click();
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