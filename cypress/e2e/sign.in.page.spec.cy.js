/// <reference types="cypress"/>

describe('Sign in Page', () => {
  it('should allow to log in', () => {
    cy.visit('#/login');

    cy.registerNewUser().then(({ email, password }) => {
      cy.findByPlaceholder('Email').type(email);
      cy.findByPlaceholder('Password').type(password);

      cy.get('.btn').click();
    });
  });
});
