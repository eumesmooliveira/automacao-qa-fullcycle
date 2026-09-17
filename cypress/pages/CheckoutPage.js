class CheckoutPage {
  validateCheckoutInformationPage() {
    cy.url().should('include', '/checkout-step-one.html');
  }

  fillFirstName(firstName) {
    cy.get('#first-name').type(firstName);
  }

  fillLastName(lastName) {
    cy.get('#last-name').type(lastName);
  }

  fillPostalCode(postalCode) {
    cy.get('#postal-code').type(postalCode);
  }

  fillCheckoutInformation(firstName, lastName, postalCode) {
    this.fillFirstName(firstName);
    this.fillLastName(lastName);
    this.fillPostalCode(postalCode);
  }

  continueCheckout() {
    cy.get('#continue').click();
  }

  validateErrorMessage(message) {
    cy.get('[data-test="error"]')
      .should('be.visible')
      .and('contain', message);
  }

  validateCheckoutOverviewPage() {
    cy.url().should('include', '/checkout-step-two.html');
  }

  validateProduct(productName) {
    cy.get('.inventory_item_name')
      .should('have.text', productName);
  }

  finishCheckout() {
    cy.get('#finish').click();
  }

  validateCheckoutCompletePage() {
    cy.url().should('include', '/checkout-complete.html');

    cy.get('.complete-header')
      .should('be.visible')
      .and('have.text', 'Thank you for your order!');
  }
}

export default new CheckoutPage();