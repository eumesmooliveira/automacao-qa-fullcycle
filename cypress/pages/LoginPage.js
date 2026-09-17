class LoginPage {
  visit() {
    cy.visit('https://www.saucedemo.com/');
  }

  fillUsername(username) {
    cy.get('#user-name')
      .should('be.visible')
      .clear();

    cy.get('#user-name')
      .type(username);
  }

  fillPassword(password) {
    cy.get('#password')
      .should('be.visible')
      .clear();

    cy.get('#password')
      .type(password, { log: false });
  }

  clickLogin() {
    cy.get('#login-button')
      .should('be.visible')
      .click();
  }

  validateErrorMessage(message) {
    cy.get('[data-test="error"]')
      .should('be.visible')
      .and('contain', message);
  }
}

export default new LoginPage();