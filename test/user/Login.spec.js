const { default: axios } = require("axios");
const { describe, it } = require("mocha");
const { expect } = require("chai");
const { faker } = require("@faker-js/faker");
const CreateUser = require("../../user-utils");

const userToken = require("../../userToken");
const logintoken = require('../../loginData.json');

const baseUrl = "https://thinking-tester-contact-list.herokuapp.com/users/";



let user = CreateUser();
let token;

 const loginData = {
   email: logintoken.email,
   password: logintoken.validpassword
 };


  const wrongloginData = {
    email: logintoken.invalidemail,
    password: logintoken.invalidpassword,
  };




describe("Login Test", () => {

      before(" login , get the bearer token", async () => {
        token = await userToken(user);
      });

  it("Should be Able to login after user get Created", async () => {
    const response = await axios.post(`${baseUrl}` + "login", loginData);
    // token = response.data.token;

    expect(response.status).to.be.equal(200);
    expect(token).to.exist;
  }).timeout(30000);
});
