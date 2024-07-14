import seats from "../fixtures/seats.json"

describe('order ticket', () => {
  beforeEach( () => {
    cy.visit('/');
  })

  seats.forEach((test) => {
    it(test.name, () => {
      cy.get('.page-nav__day').then((elements) => {
        elements[2].click();
      cy.contains("13:00").click();
      })

      test.seats.forEach((item) => {
        cy.get(
          `.buying-scheme__wrapper > :nth-child(${item.row}) > :nth-child(${item.seat})`
        ).click();
      })
      cy.get('.acceptin-button').click();

      cy.get('.ticket__check-title').should("have.text", "Вы выбрали билеты:");
    })
  })
})