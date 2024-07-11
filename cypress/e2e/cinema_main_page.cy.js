describe('Cinema main page tests', () => {
  beforeEach( () => {
    cy.visit('/');
  })

  it('Check number of days', () => {
    cy.get('.page-header__title').should("have.text", "Идем в кино");
    cy.get('.page-nav__day').should("have.length", 7);
  })

  it('order ticket', () => {
    cy.get('.page-nav__day').then((elements) => {
      elements[2].click();

    cy.contains("13:00").click();
    })
  })
})