describe('homepage', () => {
  it('user should visit our app', () => {
    cy.visit('/')
    cy.visit('/contact_me')
  });
})