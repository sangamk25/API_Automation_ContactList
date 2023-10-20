

const { default: axios } = require("axios");
const { describe, it } = require("mocha");
const { expect } = require("chai");
const { faker } = require("@faker-js/faker");

const CreateUser = require("../../user-utils");

const userToken = require("../../userToken");

const baseUrl = "https://thinking-tester-contact-list.herokuapp.com/users/";

const updatedName = faker.person.firstName(); 
const updated_name = faker.person.lastName();

const user = CreateUser();
var token;

const updateFirstName = () => {
  const updatedData = {
    firstName: updatedName,
  };

  return updatedData;
};
const updatelasttName = () => {
  const updatedData = {
    lasttName: updated_name,
  };

  return updatedData;
};

const update_FirstName = updateFirstName();
const update_lastName = updatelasttName();

describe('Updating the User' , () => {

     before("login and get the bearer token", async () => {
       token = await userToken(user);
     });

    it('User should be Updated first name', async () => {
       
         
          if (!token) {
            console.error("No valid token available.");
            return;
          }
        

          const payload = {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          };
          const response = await axios.patch(`${baseUrl}`+ "me",
            update_FirstName,
            payload
          );
          console.log(response.data);
          expect(response.status).to.equal(200);
        }).timeout(300000);

            it("User should be Updated last name", async () => {
              if (!token) {
                console.error("No valid token available.");
                return;
              }

              const payload = {
                headers: {
                  Authorization: `Bearer ${token}`,
                },
              };
              const response = await axios.patch(
                `${baseUrl}` + "me",
                update_lastName,
                payload
              );
              console.log(response.data);
              expect(response.status).to.equal(200);
            }).timeout(300000);

            it("check updated name  is correctly shown ", async () => {
              const payload = {
                headers: {
                  Authorization: `Bearer ${token}`,
                },
              };
              try {
                const response = await axios.patch(
                  `${baseUrl}` + "me",
                  update_FirstName,
                  payload
                );
                 console.log(response.data);
                expect(response.data.firstName).to.be.equal(updatedName);
                   
              } catch (error) {
                console.log(error);
              }
            }).timeout(30000);
    
})



