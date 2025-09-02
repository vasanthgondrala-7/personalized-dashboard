// Basic Cypress spec: open the home page and search
describe('Home', () => {
  it('loads and searches', () => {
    cy.visit('http://localhost:3000')
    cy.get('input[placeholder="Search..."]').type('News')
    cy.wait(500)
    cy.get('button').contains('Load more').click()
  })
})
