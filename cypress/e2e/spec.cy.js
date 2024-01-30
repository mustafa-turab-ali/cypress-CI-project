/// <reference types="cypress" />
describe('page1', () => {
  it('works', () => {
    cy.visit('https://example.cypress.io')
  })
}),
describe('page2 not working', () => {
  it('works', () => {
    cy.visit('https://example.cypress.io')
    expect(true).to.equal(false)
  })
})
