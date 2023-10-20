const { default: axios } = require("axios");
const { describe, it } = require("mocha");
const { expect } = require("chai");
const { faker } = require("@faker-js/faker");
const CreateUser = require('../../user-utils')

const baseUrl = "https://thinking-tester-contact-list.herokuapp.com/users/";

const user = CreateUser();

describe("Add user", () => {
  let token;
 

  it("Adding the user", async () => {

    try {
      console.log(user);

      const response = await axios.post(baseUrl, user);

      token = response.data.token;
      User_Id = response.data.user._id;

      console.log(response.data);
      console.log("UserId : ", User_Id);

      expect(response.status).to.equal(201);
    } catch (error) {
      console.error(error);
    }
  }).timeout(300000);

     


  
});
