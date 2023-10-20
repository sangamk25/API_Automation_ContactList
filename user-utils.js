const { faker } = require("@faker-js/faker");

const createData = () => {
  const randomName = faker.person.firstName("male");
  const lastName = faker.person.lastName();
  const email = faker.internet.email().toLowerCase();
  userData = {
    firstName: randomName,
    lastName: lastName,
    email: email,
    password: "mypasdmkdn",
  };
  return userData;
};

module.exports = createData;
