describe('Angular 16 new features e2e tests', () => {
  it('should visit home page of Angular 16 new features home page', () => {
    cy.visit('localhost:4200')
  })

  it('should increment counter', () => {
    cy.visit('localhost:4200')
    cy.get('#counter-augment').click();
    cy.get('#counter-value').should('have.text','1');
  })

})
