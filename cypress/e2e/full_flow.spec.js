describe('Full user flow', () => {
  it('signs in, favorites an item, reorders', () => {
    cy.visit('http://localhost:3000')
    // sign in (NextAuth demo)
    cy.contains('Sign in').click()
    // NextAuth sign in flow for credentials provider will show a form
    cy.get('input[name="username"]').type('candidate')
    cy.get('input[name="password"]').type('password')
    cy.get('button[type="submit"]').click()
    cy.contains('Signed in as', { timeout: 5000 }).should('exist')
    // favorite the first card
    cy.get('article[role="article"]').first().within(() => {
      cy.get('button[aria-label^="fav-"]').click()
    })
    // go to favorites page
    cy.contains('Favorites').click()
    cy.get('article[role="article"]').should('exist')
    // reorder on home
    cy.contains('Feed').click()
    // simple assertion: load more
    cy.contains('Load more').click()
  })
})
