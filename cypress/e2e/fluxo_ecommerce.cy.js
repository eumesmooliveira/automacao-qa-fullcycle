import LoginPage from '../pages/LoginPage';
import InventoryPage from '../pages/InventoryPage';
import CartPage from '../pages/CartPage';
import CheckoutPage from '../pages/CheckoutPage';

describe('Automação E2E - Full-Cycle QA Suite', () => {
  const baseUrl = 'https://www.saucedemo.com/';

  describe('Autenticação', () => {
    it('CT02 - Deve exibir mensagem de erro ao tentar logar com senha inválida', () => {
      LoginPage.login('standard_user', 'senha_errada');

      LoginPage.validateErrorMessage(
        'Epic sadface: Username and password do not match any user in this service'
      );
    });

    it('CT10 - Deve impedir login de usuário bloqueado', () => {
      LoginPage.login('locked_out_user', 'secret_sauce');

      LoginPage.validateErrorMessage(
        'Epic sadface: Sorry, this user has been locked out.'
      );

      cy.url().should('eq', baseUrl);
    });
  });

  describe('Fluxo de compra', () => {
    it('CT01 - Deve realizar login e concluir a compra com sucesso (Happy Path)', () => {
      LoginPage.login();

      InventoryPage.validateInventoryPage();
      InventoryPage.addBackpackToCart();
      InventoryPage.validateCartBadge(1);
      InventoryPage.openCart();

      CartPage.validateCartPage();
      CartPage.validateProduct('Sauce Labs Backpack');
      CartPage.proceedToCheckout();

      CheckoutPage.validateCheckoutInformationPage();

      CheckoutPage.fillCheckoutInformation(
        'Felipe',
        'Oliveira',
        '78550000'
      );

      CheckoutPage.continueCheckout();
      CheckoutPage.validateCheckoutOverviewPage();
      CheckoutPage.validateProduct('Sauce Labs Backpack');
      CheckoutPage.finishCheckout();
      CheckoutPage.validateCheckoutCompletePage();
    });

    it('CT11 - Deve adicionar e remover um produto do carrinho', () => {
      LoginPage.login();

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
      LoginPage.login();

      InventoryPage.validateInventoryPage();
      InventoryPage.addBackpackToCart();
      InventoryPage.openCart();

      CartPage.validateCartPage();
      CartPage.proceedToCheckout();

      CheckoutPage.validateCheckoutInformationPage();

      CheckoutPage.continueCheckout();

      CheckoutPage.validateErrorMessage(
        'Error: First Name is required'
      );

      CheckoutPage.fillFirstName('Felipe');
      CheckoutPage.continueCheckout();

      CheckoutPage.validateErrorMessage(
        'Error: Last Name is required'
      );

      CheckoutPage.fillLastName('Oliveira');
      CheckoutPage.continueCheckout();

      CheckoutPage.validateErrorMessage(
        'Error: Postal Code is required'
      );

      CheckoutPage.validateCheckoutInformationPage();
    });

    it('CT13 - Deve adicionar múltiplos produtos e validar o carrinho', () => {
      LoginPage.login();

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