/// <reference types="cypress" />

describe('spec.cy.js', () => {
  it('should test the Github action', () => {
    cy.visit('https://www.oriolgomez.com')
    cy.get('ul > li:nth-child(1) > a')
    .should('contain.text', 'Games for iOS')
  })

  it('has valid env values', () => {
    expect(Cypress.env())
      .to.be.an('object')
      .and.to.include.keys('env')
    cy.log('**test:** ' + Cypress.env('env').test)
  })
})
