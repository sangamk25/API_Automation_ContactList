const { default: axios } = require("axios");
const { describe, it } = require("mocha");
const { expect } = require("chai");
const { faker } = require("@faker-js/faker");
const {contactdata} = require("../../contact-utils");

const userToken = require("../../logintoken");

const baseUrl = "https://thinking-tester-contact-list.herokuapp.com/contacts";


describe("Login",function(){
    var token;

    

    before('login and get the bearer token',async() => {
      token = await userToken()
  })

    it("should Contact is creating ", async () => {
        const payload = {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        };
        try {
          const response = await axios.post(`${baseUrl}` ,contactdata,
            payload
          );
          
          expect(response.status).to.be.equal(201);
        } catch (error) {
          console.log(error);
        }
      }).timeout(30000);
         it("Ensuring the lastname of contact details is correct  ", async () => {
           const payload = {
             headers: {
               Authorization: `Bearer ${token}`,
             },
           };
           try {
             const response = await axios.post(
               `${baseUrl}`,
               contactdata,
               payload
             );

             expect(response.data.lastName).to.be.equal(contactdata.lastName);
           } catch (error) {
             console.log(error);
           }
         }).timeout(30000);
    });