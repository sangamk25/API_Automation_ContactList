const baseUrl = "https://thinking-tester-contact-list.herokuapp.com/users/";
const axios = require("axios");


async function userToken(user) {
 
  const response = await axios.post(baseUrl, user);
  
  token = response.data.token;
 
  return token;
}

module.exports = userToken;
