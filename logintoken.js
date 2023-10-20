const baseUrl = "https://thinking-tester-contact-list.herokuapp.com";
const axios = require("axios");
const loginData = require("./loginData.json");

const userData = {
  email: loginData.email,
  password: loginData.validpassword,
};
async function userToken() {
  try {
    const response = await axios.post(`${baseUrl}/users/login`, userData);
    token = response.data.token;
    return token;
  } catch (error) {
    console.log(error.response);
  }
}
module.exports = userToken;
