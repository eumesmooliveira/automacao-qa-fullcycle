import LoginPage from '../pages/LoginPage';
import InventoryPage from '../pages/InventoryPage';
import CartPage from '../pages/CartPage';
import CheckoutPage from '../pages/CheckoutPage';

describe('Automação E2E - Full-Cycle QA Suite', () => {
  const baseUrl = 'https://www.saucedemo.com/';

  let users;
  let checkout;

  before(() => {
    cy.fixture('users').then((data) => {
      users = data;
    });

    cy.fixture('checkout').then((data) => {
      checkout = data;
    });
  });

  describe('Autenticação', () => {
    it('CT02 - Deve exibir mensagem de erro ao tentar logar com senha inválida', () => {
      LoginPage.login(
        users.invalid.username,
        users.invalid.password
      );

      LoginPage.validateErrorMessage(
        'Epic sadface: Username and password do not match any user in this service'
      );
    });

    it('CT10 - Deve impedir login de usuário bloqueado', () => {
      LoginPage.login(
        users.locked.username,
        users.locked.password
      );

      LoginPage.validateErrorMessage(
        'Epic sadface: Sorry, this user has been locked out.'
      );

      cy.url().should('eq', baseUrl);
    });
  });

  describe('Fluxo de compra', () => {
    it('CT01 - Deve realizar login e concluir a compra com sucesso (Happy Path)', () => {
      LoginPage.login(
        users.standard.username,
        users.standard.password
      );

      InventoryPage.validateInventoryPage();

      InventoryPage.addBackpackToCart();
      InventoryPage.validateCartBadge(1);
      InventoryPage.openCart();

      CartPage.validateCartPage();
      CartPage.validateProduct('Sauce Labs Backpack');
      CartPage.proceedToCheckout();

      CheckoutPage.fillCheckoutInformation(
        checkout.validCustomer.firstName,
        checkout.validCustomer.lastName,
        checkout.validCustomer.postalCode
      );

      CheckoutPage.continueCheckout();

      CheckoutPage.validateCheckoutOverviewPage();
      CheckoutPage.validateProduct('Sauce Labs Backpack');

      CheckoutPage.finishCheckout();
      CheckoutPage.validateCheckoutCompletePage();
    });

    it('CT11 - Deve adicionar e remover um produto do carrinho', () => {
      LoginPage.login(
        users.standard.username,
        users.standard.password
      );

      InventoryPage.validateInventoryPage();

      InventoryPage.addBackpackToCart();
      InventoryPage.validateCartBadge(1);
      InventoryPage.openCart();

      CartPage.validateCartPage();
      CartPage.validateProduct('Sauce Labs Backpack');

      CartPage.removeBackpack();
      CartPage.validateEmptyCart();
    });

    it('CT12 - Deve validar campos obrigatórios no checkout', () => {
      LoginPage.login(
        users.standard.username,
        users.standard.password
      );

      InventoryPage.validateInventoryPage();

      InventoryPage.addBackpackToCart();
      InventoryPage.openCart();

      CartPage.validateCartPage();
      CartPage.proceedToCheckout();

      CheckoutPage.continueCheckout();

      CheckoutPage.validateErrorMessage(
        'Error: First Name is required'
      );

      CheckoutPage.fillFirstName(
        checkout.validCustomer.firstName
      );

      CheckoutPage.continueCheckout();

      CheckoutPage.validateErrorMessage(
        'Error: Last Name is required'
      );

      CheckoutPage.fillLastName(
        checkout.validCustomer.lastName
      );

      CheckoutPage.continueCheckout();

      CheckoutPage.validateErrorMessage(
        'Error: Postal Code is required'
      );

      cy.url().should('include', '/checkout-step-one.html');
    });

    it('CT13 - Deve adicionar múltiplos produtos e validar o carrinho', () => {
      LoginPage.login(
        users.standard.username,
        users.standard.password
      );

      InventoryPage.validateInventoryPage();

      InventoryPage.addBackpackToCart();
      InventoryPage.addBikeLightToCart();

      InventoryPage.validateCartBadge(2);
      InventoryPage.openCart();

      CartPage.validateCartPage();

      CartPage.validateProducts([
        'Sauce Labs Backpack',
        'Sauce Labs Bike Light'
      ]);
    });
  });
});