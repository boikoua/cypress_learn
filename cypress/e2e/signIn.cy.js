/// <reference types="cypress" />

describe('Sign In page', () => {
  beforeEach(() => {
    // Переход на страницу перед каждым тестом
    cy.visit('/');
  });

  it('should provide an ability to log in', () => {
    // Поиск нужной ссылки и клик по ней
    cy.contains('a', 'Sign in').click();

    // Проверка адреса на правильность
    cy.url().should('include', '/login');

    // Поиск нужных полей формы и заполнение
    cy.get('[placeholder=Email]').type('tecem61154@ptiong.com');
    cy.get('[placeholder=Password]').type('test12345');

    // Поиск кнопки отправки формы
    cy.contains('button', 'Sign in').click();

    // Проверка,что пользователь вошел в систему
    cy.contains('a', 'dima1994');
  });
});
