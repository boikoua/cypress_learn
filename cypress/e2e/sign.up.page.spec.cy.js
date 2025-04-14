/// <reference types="cypress"/>

const generateUser = require('./../support/generateUser');

// тесты для тестирования регистрации
describe('Sign Up page', () => {
  beforeEach(() => {
    cy.visit('/register');
  });

  it('should register user', () => {
    cy.get('h1').should('contain.text', 'Sign up');

    // получаем данные для пользователя
    const { username, email, password } = generateUser();

    // Вводим текст с помощью метода type проверяем ввод имени
    cy.get('input[placeholder=Username]').type(username);
    cy.get('input[placeholder=Email]').type(email);
    cy.get('input[placeholder=Password]').type(password);

    // Клик на кнопку
    cy.get('.btn').click();
    cy.get('.swal-title').should('contain.text', 'Welcome!');
    cy.get('.swal-button').click();

    // Перехожу на домашнюю страницу.
    // cy.contains('a', 'Home').should('exist').click();

    // Проверяю, нахожусь ли я на домашней странице
    cy.url().should('equal', Cypress.config().baseUrl + '/');
  });

  // тест что нельзя зарегистрировать пользователя с уже имеющимся имейлом
  it('should not allow register with an existed email', () => {
    const { username, email, password } = generateUser();

    // Вводим текст с помощью метода type проверяем ввод имени
    cy.get('input[placeholder=Username]').type(username + '_new');
    cy.get('input[placeholder=Email]').type(email);
    cy.get('input[placeholder=Password]').type(password);

    // Клик на кнопку
    cy.get('.btn').click();
    cy.get('.swal-title').should('contain.text', 'Email already taken');
    cy.get('.swal-button').click();
  });
});
