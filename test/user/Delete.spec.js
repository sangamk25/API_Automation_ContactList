const { default: axios } = require("axios");
const { describe, it } = require("mocha");
const { expect } = require("chai");
const { faker } = require("@faker-js/faker");
const CreateUser = require("../../user-utils");

const userToken = require("../../userToken");

const baseUrl = "https://thinking-tester-contact-list.herokuapp.com/users/";

const user = CreateUser();

var token;

describe("Delete the Created User ", () => {
  before("After login we will get the bearer token", async () => {
    token = await userToken(user);
  });
  it("After User is crested we need be delete the user", async () => {
    const payload = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    try {
      const response = await axios.delete(`${baseUrl}` + "me", payload);
      console.log(response.data);

      expect(response.status).to.equal(200);
    } catch (error) {
      console.log(error);
    }
  });
});
