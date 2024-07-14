const selector = require("../fixtures/selectors-main-page.json")

describe('Cinema main page tests', () => {
  beforeEach( () => {
    cy.visit('/');
  })

  it('Check number of days', () => {
    cy.get(selector.headerTitle).should("have.text", "Идем в кино");
    cy.get(selector.days).should("have.length", 7);
  })

})