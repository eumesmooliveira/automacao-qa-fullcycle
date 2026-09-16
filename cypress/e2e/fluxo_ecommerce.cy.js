describe('Automação E2E - Full-Cycle QA Suite', () => {
  const baseUrl = 'https://www.saucedemo.com/';

  const login = (username = 'standard_user', password = 'secret_sauce') => {
    cy.visit(baseUrl);

    cy.get('#user-name').type(username);
    cy.get('#password').type(password);
    cy.get('#login-button').click();
  };

  describe('Autenticação', () => {
    it('CT02 - Deve exibir mensagem de erro ao tentar logar com senha inválida', () => {
      login('standard_user', 'senha_errada');

      cy.get('[data-test="error"]')
        .should('be.visible')
        .and(
          'contain',
          'Epic sadface: Username and password do not match any user in this service'
        );
    });

    it('CT10 - Deve impedir login de usuário bloqueado', () => {
      login('locked_out_user', 'secret_sauce');

      cy.get('[data-test="error"]')
        .should('be.visible')
        .and(
          'contain',
          'Epic sadface: Sorry, this user has been locked out.'
        );

      cy.url().should('eq', baseUrl);
    });
  });

  describe('Fluxo de compra', () => {
    it('CT01 - Deve realizar login e concluir a compra com sucesso (Happy Path)', () => {
      login();

      cy.url().should('include', '/inventory.html');
      cy.get('.title').should('have.text', 'Products');

      cy.get('#add-to-cart-sauce-labs-backpack').click();

      cy.get('.shopping_cart_badge')
        .should('be.visible')
        .and('have.text', '1');

      cy.get('.shopping_cart_link').click();

      cy.url().should('include', '/cart.html');
      cy.get('.inventory_item_name')
        .should('have.text', 'Sauce Labs Backpack');

      cy.get('#checkout').click();

      cy.get('#first-name').type('Felipe');
      cy.get('#last-name').type('Oliveira');
      cy.get('#postal-code').type('78550000');
      cy.get('#continue').click();

      cy.url().should('include', '/checkout-step-two.html');

      cy.get('.inventory_item_name')
        .should('have.text', 'Sauce Labs Backpack');

      cy.get('#finish').click();

      cy.url().should('include', '/checkout-complete.html');

      cy.get('.complete-header')
        .should('be.visible')
        .and('have.text', 'Thank you for your order!');
    });
    it('CT11 - Deve adicionar e remover um produto do carrinho', () => {
      login();

      cy.url().should('include', '/inventory.html');

      // Adiciona o produto ao carrinho
      cy.get('#add-to-cart-sauce-labs-backpack').click();

      cy.get('.shopping_cart_badge')
        .should('be.visible')
        .and('have.text', '1');

      // Acessa o carrinho
      cy.get('.shopping_cart_link').click();

      cy.url().should('include', '/cart.html');

      cy.get('.inventory_item_name')
        .should('contain', 'Sauce Labs Backpack');

      // Remove o produto
      cy.get('#remove-sauce-labs-backpack').click();

      // Valida que o produto foi removido
      cy.get('.inventory_item_name')
        .should('not.exist');

      // Carrinho vazio não deve exibir contador
      cy.get('.shopping_cart_badge')
        .should('not.exist');
    });
    it('CT12 - Deve validar campos obrigatórios no checkout', () => {
      login();

      cy.url().should('include', '/inventory.html');

      // Adiciona um produto e inicia o checkout
      cy.get('#add-to-cart-sauce-labs-backpack').click();
      cy.get('.shopping_cart_link').click();
      cy.get('#checkout').click();

      cy.url().should('include', '/checkout-step-one.html');

      // Tenta continuar sem preencher os dados obrigatórios
      cy.get('#continue').click();

      cy.get('[data-test="error"]')
        .should('be.visible')
        .and('contain', 'Error: First Name is required');

      // Preenche apenas o primeiro nome
      cy.get('#first-name').type('Felipe');
      cy.get('#continue').click();

      cy.get('[data-test="error"]')
        .should('be.visible')
        .and('contain', 'Error: Last Name is required');

      // Preenche o sobrenome, mantendo o CEP vazio
      cy.get('#last-name').type('Oliveira');
      cy.get('#continue').click();

      cy.get('[data-test="error"]')
        .should('be.visible')
        .and('contain', 'Error: Postal Code is required');

      // O usuário deve permanecer na etapa de informações
      cy.url().should('include', '/checkout-step-one.html');
    });
    it('CT13 - Deve adicionar múltiplos produtos e validar o carrinho', () => {
      login();

      cy.url().should('include', '/inventory.html');

      // Adiciona dois produtos
      cy.get('#add-to-cart-sauce-labs-backpack').click();
      cy.get('#add-to-cart-sauce-labs-bike-light').click();

      // Valida quantidade de itens no carrinho
      cy.get('.shopping_cart_badge')
        .should('be.visible')
        .and('have.text', '2');

      // Acessa o carrinho
      cy.get('.shopping_cart_link').click();

      cy.url().should('include', '/cart.html');

      // Valida os produtos adicionados
      cy.get('.inventory_item_name')
        .should('have.length', 2)
        .then(($items) => {
          const products = [...$items].map((item) => item.innerText);

          expect(products).to.include('Sauce Labs Backpack');
          expect(products).to.include('Sauce Labs Bike Light');
        });
    });
  });
});