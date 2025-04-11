/// <reference types="cypress"/>

describe('My first test', () => {
  it('should', () => {
    // Заходим на сайт и проверяем есть ли там заголовок h1 с нужным текстом
    cy.visit('/').get('h1').should('contain.text', 'conduit');

    // Ищем элемент с текстом Sign in и нажимаем на него
    cy.contains('Sign in').click();

    // Проверяем, есть ли на сайте нужный элемент с текстом
    cy.get('h1').should('contain.text', 'Sign In');
  });
});
