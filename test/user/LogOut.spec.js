const { default: axios } = require("axios");
const { describe, it } = require("mocha");
const { expect } = require("chai");
const { faker } = require("@faker-js/faker");

const CreateUser = require('../../user-utils');


const userToken = require("../../userToken");
const logintoken = require("../../loginData.json");


const baseUrl = "https://thinking-tester-contact-list.herokuapp.com/users/";


let user = CreateUser();
 var token;
  
  const loginData = {
    email: logintoken.email,
    password: logintoken.validpassword,
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




describe ('Logout Test' , () => {
    it("Log Out User", async () => {
      
        if (!token) {
          console.error("No valid token available.");
          return;
        }

        const payload = {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        };

        const response = await axios.post(
          `${baseUrl}` + "logout",
          null,
          payload
        );
        console.log(response.data);

        expect(response.status).to.equal(200);
       // expect(response.data.message).to.equal("Logged out successfully");
      });
      it("Log Out Invalid Token", async () => {
        
        const invalidToken = "invalidToken"; 

        
        if (!invalidToken) {
          console.error("No valid token available.");
          return;
        }

        const payload = {
          headers: {
            Authorization: `Bearer ${invalidToken}`,
          },
        };

        
        try {
          const logoutResponse = await axios.post(
            `${baseUrl}`+ "logout",
            null,
            payload
          );

          console.log(logoutResponse.status, logoutResponse.data);

        } catch (error) {
         
          expect(error.response.status).to.equal(401);
        }
      }).timeout(300000);

    });
