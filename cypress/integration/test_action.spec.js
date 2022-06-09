/// <reference types="cypress" />

describe('spec.cy.js', () => {
  it('should test the Github action', () => {
    cy.visit('https://www.oriolgomez.com')
    cy.get('ul > li:nth-child(1) > a')
    .should('contain.text', 'Games for iOS')
  })
})
