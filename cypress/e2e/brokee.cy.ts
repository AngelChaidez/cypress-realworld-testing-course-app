describe('Brokee.io Login', () => {
  it('visits the Brokee.io home page, clicks the login button, and logs in successfully', () => {
    cy.visit('https://www.brokee.io')

    // Click the login button
    cy.get('button').contains('Log In').click()

    // Fill in the login form with valid credentials
    cy.origin('https://brokee.eu.auth0.com', () => {
      // Fill in the login form with valid credentials
      cy.get('input[name="email"]').type(Cypress.env('CYPRESS_USERNAME'))
      cy.get('input[name="password"]').type(Cypress.env('CYPRESS_PASSWORD'))

      // Submit the login form
      cy.get('button[type=submit]').click()
    })

  
    // Verify that the user is logged in and redirected to the dashboard page
    cy.url().should('include', '/company/candidates')
    cy.get('[class^="MuiBox-root"]').should('contain', 'Dashboard')
  })
})