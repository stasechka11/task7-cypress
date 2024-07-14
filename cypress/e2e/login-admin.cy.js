const login = require("../fixtures/admin-login.json");

describe('Admin portal tests', () => {
  beforeEach( () => {
    cy.visit('/admin');
  })

  it('Should successfully login to admin portal with correct credentials', () => {
    cy.login(login.validEmail, login.validPassword);
    cy.contains("Управление залами").should("be.visible");
  })

  it("Should show error when login with incorrect credentials", () => {
    cy.login(login.invalidEmail, login.invalidPassword);
    cy.contains("Ошибка авторизации!").should("be.visible");
  });

  it("Should show error when login with empty credentials", () => {
    cy.login("", "");
    cy.checkInputValidity("email");
  });

  it("Should show error when login with empty email", () => {
    cy.login("", login.validPassword);
    cy.checkInputValidity("email");
  });

  it("Should show error when login with empty password", () => {
    cy.login(login.validEmail, "");
    cy.checkInputValidity("password");
  });

})