const { default: axios } = require("axios");
const { describe, it } = require("mocha");
const { expect } = require("chai");
const { faker } = require("@faker-js/faker");
const CreateUser = require("../../user-utils");

const userToken = require("../../userToken");

const baseUrl = "https://thinking-tester-contact-list.herokuapp.com";


let token ;
let user = CreateUser();


describe("Adding User and Get Added user information", () => {


  before("Should login and get the bearer token", async () => {
    token = await userToken(user);
    // console.log(token);
  });

 

  it("get user info", async () => {
    if (!token) {
      console.error("No valid token available.");
      return;
    }

    const payload = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    const response = await axios.get(`${baseUrl}/users/me`, payload);
    console.log(response.data);

    expect(response.status).to.equal(200);
  }).timeout(300000);

});
   
