class InventoryPage {
  validateInventoryPage() {
    cy.url().should('include', '/inventory.html');
    cy.get('.title').should('have.text', 'Products');
  }

  addBackpackToCart() {
    cy.get('#add-to-cart-sauce-labs-backpack').click();
  }

  addBikeLightToCart() {
    cy.get('#add-to-cart-sauce-labs-bike-light').click();
  }

  validateCartBadge(quantity) {
    cy.get('.shopping_cart_badge')
      .should('be.visible')
      .and('have.text', quantity.toString());
  }

  openCart() {
    cy.get('.shopping_cart_link').click();
  }
}

export default new InventoryPage();