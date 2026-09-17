class CartPage {
  validateCartPage() {
    cy.url().should('include', '/cart.html');
  }

  validateProduct(productName) {
    cy.get('.inventory_item_name')
      .should('contain', productName);
  }

  validateProducts(productNames) {
    cy.get('.inventory_item_name')
      .should('have.length', productNames.length)
      .then(($items) => {
        const products = [...$items].map((item) => item.innerText);

        productNames.forEach((productName) => {
          expect(products).to.include(productName);
        });
      });
  }

  removeBackpack() {
    cy.get('#remove-sauce-labs-backpack').click();
  }

  validateEmptyCart() {
    cy.get('.inventory_item_name').should('not.exist');
    cy.get('.shopping_cart_badge').should('not.exist');
  }

  proceedToCheckout() {
    cy.get('#checkout').click();
  }
}

export default new CartPage();