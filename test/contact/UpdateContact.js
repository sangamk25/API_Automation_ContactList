const { default: axios } = require("axios");
const { describe, it } = require("mocha");
const { expect } = require("chai");
const { faker } = require("@faker-js/faker");
const {
  contactdata,
  updatedfirstname,
  updatedphone,
  loginData,
} = require("../../contact-utils");

const userToken = require("../../logintoken");

const baseUrl = "https://thinking-tester-contact-list.herokuapp.com/contacts/";




describe("Should be able to get contact Id and Update some details of it ", function(){
var token;
var user_ID;
  before('login and get the bearer token',async() => {
    token = await userToken()
})


it('should be able to get contact ID  ', async()=>{
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
         console.log(response.data);

      expect(response.status).to.be.equal(200);
    } catch (error) {
      console.log(error);
    }
  }).timeout(30000)


   it("should be able to update the first name  ", async () => {
     const payload = {
       headers: {
         Authorization: `Bearer ${token}`,
       },
     };
     try {
       const response = await axios.patch(
         `${baseUrl}${user_ID}`,
         updatedfirstname ,
         payload
       );
      console.log(response.data);
       expect(response.data.firstname).to.be.equal(updatedfirstname.firstName);
     } catch (error) {
       console.log(error);
     }
   }).timeout(30000);

});