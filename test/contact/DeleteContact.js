const { default: axios } = require("axios");
const { describe, it } = require("mocha");
const { expect } = require("chai");
const { faker } = require("@faker-js/faker");

const userToken = require("../../logintoken");

const baseUrl = "https://thinking-tester-contact-list.herokuapp.com/contacts/";

let user_ID;
var token;

describe("Generate and get user using ID", function () {

  before("login and get the bearer token", async () => {
    token = await userToken();
  });
  it("should be able to get by user_ID  ", async () => {

    const payload = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    try {
      const response = await axios.get(`${baseUrl}`, payload);

      user_ID = response.data[0]._id;
      console.log(user_ID);
      expect(response.status).to.be.equal(200);
    } catch (error) {
      console.log(error);
    }
  }).timeout(30000);
// });

// describe(" delete user by user_ID ", function(){
    it('should be able to delte the user by ID ', async()=>{
        const payload = {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          };
          console.log(user_ID)
          console.log(token);

          try {
            const response = await axios.delete(
              `${baseUrl}${user_ID}`,
              payload
            );
            
            expect(response.status).to.be.equal(200);
          } catch (error) {
            console.log(error);
          }
        }).timeout(40000);
    })