/// <reference types="cypress"/>

describe('My home page', () => {
  // то что используем перед каждым тестом
  beforeEach(() => {
    // Отключаем падение теста при ошибке на стороне приложения
    Cypress.on('uncaught:exception', (err, runnable) => {
      // Возвращаем false, чтобы Cypress не падал
      return false;
    });

    // переходим на главную страницу сайта перед каждым новым тестом
    cy.visit('#/');
  });

  it('should have all parts', () => {
    // Заходим на сайт и проверяем есть ли там заголовок h1 с нужным текстом
    cy.get('h1').should('contain.text', 'conduit');

    // Ищем ссылку с текстом, exist значит что должна быть обязательно
    cy.contains('a', 'Global Feed').should('exist');

    // Ищем по селектору класса текстом, exist значит что должна быть обязательно
    cy.contains('.sidebar', 'Popular Tags').should('exist');
  });

  it('should click on Sign In', () => {
    // Ищем элемент с текстом Sign in и нажимаем на него
    cy.contains('a', 'Sign in').should('exist').click();

    // Проверяем поменялся ли адрес сайта
    cy.url().should('include', '/login');

    // Проверяем, есть ли на сайте нужный элемент с текстом
    cy.get('h1').should('contain.text', 'Sign in');
  });

  it('should click on Sign Up', () => {
    // Ищем элемент с текстом Sign up и нажимаем на него
    cy.contains('a', 'Sign up').should('exist').click();

    // Проверяем поменялся ли адрес сайта
    cy.url().should('include', '/register');

    // Проверяем, есть ли на сайте нужный элемент с текстом
    cy.get('h1').should('contain.text', 'Sign up');
  });
});
