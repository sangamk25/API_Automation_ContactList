const { faker } = require("@faker-js/faker");
const { default: axios } = require("axios");

const randomfirstName = faker.person.firstName("male");
const randomlastName = faker.person.lastName();
const randomEmail = faker.internet.email();

const contactdata = {
  firstName: randomfirstName,
  lastName: randomlastName,
  birthdate: "1970-01-01",
  email: randomEmail,
  phone: "9087654367",
  street1: "1 Main St.",
  street2: "Apartment A",
  city: "Anytown",
  stateProvince: "KS",
  postalCode: "12345",
  country: "USA",
};

const loginData = {
  email: "abcd9999@gmail.com",
  password: "1234567",
};
const addconatct = async () => {
  var token;
  const response = await axios.post(
    "https://thinking-tester-contact-list.herokuapp.com/users/login",
    loginData
  );

  token = response.data.token;
  return token;
};

const updatedfirstname = {
  firstName: "Sangam Kumar",
};

const updatedphone = {
  phone: "9887597659",
};

module.exports = {
  addconatct,
  contactdata,
  updatedfirstname,
  updatedphone,
  loginData,
};
