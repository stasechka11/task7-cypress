describe('Cinema main page tests', () => {
  beforeEach( () => {
    cy.visit('/');
  })

  it('Check number of days', () => {
    cy.get('.page-header__title').should("have.text", "Идем в кино");
    cy.get('.page-nav__day').should("have.length", 7);
  })
  
})