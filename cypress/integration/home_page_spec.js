describe('Home page', function() {
  it('has a title', function() {
    cy.visit('/');
    cy.get('.title').should('contain', 'Acebook');
  });

  it('can log in a user', function() {
    cy.visit('/');
    cy.get('#login-form').find('[name="username"]').type('tester');
    cy.get('#login-form').find('[name="password"]').type('12345');

    cy.get('#login-form').submit();

    //cy.get(current_path).toequal('/login')
    cy.url().should("eq", "http://localhost:3030/posts");
  });
});
