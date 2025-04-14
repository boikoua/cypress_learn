// Импортирую библиотеку фейкер
const { faker } = require('@faker-js/faker');

function generateUser() {
  const randomNumber = Math.random().toString().slice(2, 6);
  const username = faker.internet.username() + randomNumber;
  const email = `${username}@gmail.com`;
  const password = 'Test1234';

  return { username, email, password };
}

module.exports = generateUser;
