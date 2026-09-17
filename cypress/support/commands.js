import LoginPage from '../pages/LoginPage';

Cypress.Commands.add('login', (username, password) => {
  LoginPage.visit();
  LoginPage.fillUsername(username);
  LoginPage.fillPassword(password);
  LoginPage.clickLogin();
});