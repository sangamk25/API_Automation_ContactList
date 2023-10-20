const { default: axios } = require("axios");
const { describe, it } = require("mocha");
const { expect } = require("chai");
const { faker } = require("@faker-js/faker");

const userToken = require("../../logintoken");

const baseUrl = "https://thinking-tester-contact-list.herokuapp.com/contacts/";


describe(" Getting contact details", function () {

   let user_ID;
    let token
    before('login and get the bearer token',async() => {
        token = await userToken()
    })

    it('should be able to get contact id  ', async()=>{
      const payload = {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        };
        try {
          const response = await axios.get(`${baseUrl}` ,
            payload
          );
          
           user_ID = (response.data[0]._id);
           console.log(user_ID)
          expect(response.status).to.be.equal(200);
        } catch (error) {
          console.log(error);
        }
      }).timeout(30000);
      it("obtain Contact Details by user_ID ", async () => {
        const payload = {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        };
        try {
          const response = await axios.get(`${baseUrl}${user_ID}`, payload);
         // console.log(response.data);

          expect(response.status).to.be.equal(200);
        } catch (error) {
          console.log(error);
        }
      }).timeout(30000);
       it("Negative Test : try to get Contact Details by invalid user id hard coded ", async () => {
         let User_ID = "6548653864346"
         const payload = {
           headers: {
             Authorization: `Bearer ${token}`,
           },
         };
         try {
           const response = await axios.get(`${baseUrl}${User_ID}`, payload);
           // console.log(response.data);

           expect(response.status).to.be.equal(200);
         } catch (error) {
           console.log(error);
         }
       }).timeout(30000);
    });