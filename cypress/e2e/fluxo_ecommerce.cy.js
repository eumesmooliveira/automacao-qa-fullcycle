describe('Automação E2E - Full-Cycle QA Suite', () => {
  it('CT01 - Deve realizar login e concluir a compra com sucesso (Happy Path)', () => {
    cy.visit('https://www.saucedemo.com/');
    cy.wait(1500); // Pausa inicial para o vídeo capturar a tela de login

    cy.get('#user-name').type('standard_user');
    cy.get('#password').type('secret_sauce');
    cy.get('#login-button').click();

    cy.url().should('include', '/inventory.html');
    cy.get('.title').should('have.text', 'Products');
    cy.wait(1500); // Pausa para ver a vitrine de produtos

    cy.get('#add-to-cart-sauce-labs-backpack').click();
    cy.get('.shopping_cart_badge').should('have.text', '1');

    cy.get('.shopping_cart_link').click();
    cy.get('#checkout').click();

    cy.get('#first-name').type('Felipe');
    cy.get('#last-name').type('Oliveira');
    cy.get('#postal-code').type('78550000');
    cy.get('#continue').click();
    cy.wait(1500); // Pausa para ver o resumo do pedido

    cy.get('#finish').click();
    cy.get('.complete-header').should('have.text', 'Thank you for your order!');
    cy.wait(2500); // Pausa maior para destacar a mensagem de sucesso no vídeo
  });

  it('CT02 - Deve exibir mensagem de erro ao tentar logar com senha inválida', () => {
    cy.visit('https://www.saucedemo.com/');
    cy.wait(1500);
    
    cy.get('#user-name').type('standard_user');
    cy.get('#password').type('senha_errada');
    cy.get('#login-button').click();

    cy.get('[data-test="error"]').should('be.visible')
      .and('contain', 'Epic sadface: Username and password do not match any user in this service');
    cy.wait(2500); // Pausa para destacar o cenário negativo no vídeo
  });
});