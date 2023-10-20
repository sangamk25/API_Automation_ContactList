const { default: axios } = require("axios");
const { describe, it } = require("mocha");
const { expect } = require("chai");
const { faker } = require("@faker-js/faker");

const userToken = require("../../logintoken");

const baseUrl = "https://thinking-tester-contact-list.herokuapp.com/contacts/";



describe("get all contact list with details  ", function(){

  let token
    before('login and get the bearer token',async() => {
        token = await userToken()
    })

    it('Check Contact list is empty or not ', async()=>{
        const payload = {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          };
          try {
            const response = await axios.get(`${baseUrl}` ,
              payload
            );
            console.log(response.data);
             expect(response.status).to.be.equal(200);
            expect(response.data).not.to.be.empty;
          } catch (error) {
            console.log(error);
          }
        }).timeout(30000)
    })