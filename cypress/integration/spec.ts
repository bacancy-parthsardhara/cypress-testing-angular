describe('My First Test', () => {
  it('Should visit the login page', () => {
    cy.visit('/login');
    cy.url().should('includes', 'login');
    cy.get('#loginFormTitle').should('be.visible');
    cy.get('#loginFormTitle').should('have.text', 'Login Form');
    cy.get('#loginFormEmailInputValue').should('not.exist');
    cy.get('#loginFormPasswordInputValue').should('not.exist');
  })

  it('Should enter valid email and password and redirect to the dashboard', () => {
    cy.visit('/login');
    cy.url().should('includes', 'login');
    cy.get('#loginFormEmailInput').type('parth@gmail.com');
    cy.get('#loginFormPasswordInput').type('Parth@123');
    cy.get('#loginFormSubmitButton').click();
    cy.get('#loginFormEmailInputValue').should('be.visible');
    cy.get('#loginFormEmailInputValue').should('have.text', 'Email: parth@gmail.com');
    cy.get('#loginFormPasswordInputValue').should('be.visible');
    cy.get('#loginFormPasswordInputValue').should('have.text', 'Password: Parth@123');
  })
})
