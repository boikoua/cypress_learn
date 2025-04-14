/// <reference types="cypress"/>

// тесты для тестирования регистрации
describe('Sign Up page', () => {
  beforeEach(() => {
    cy.visit('/register');
  });

  it('should register user', () => {
    const randomNumber = Math.random().toString().slice(2);

    const userName = `test_user_${randomNumber}`;

    cy.get('h1').should('contain.text', 'Sign up');

    // Вводим текст с помощью метода type проверяем ввод имени
    cy.get('input[placeholder=Username]').type(userName);
    cy.get('input[placeholder=Email]').type(`${userName}@gmail.com`);
    cy.get('input[placeholder=Password]').type('1234567890');
    // Клик на кнопку

    cy.get('.btn').click();
    cy.get('.swal-title').should('contain.text', 'Registration failed!');
    cy.get('.swal-button').click();
  });
});
