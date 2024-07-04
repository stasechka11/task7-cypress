describe('template spec', () => {
  beforeEach( () => {
    cy.visit('/');
  })

  it('Check number of days', () => {
    cy.get('.page-nav__day').should("have.length", 7);
  })

  it.only('order ticket', () => {
    cy.get('.page-nav__day').then((elements) => {
      elements[2].click();

    cy.contains("13:00").click();
    })
  })
})