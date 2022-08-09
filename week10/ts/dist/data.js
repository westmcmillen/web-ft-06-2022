"use strict";
const userIds = [
    {
        id: "b6809de6-1743-11ed-861d-0242ac120002",
    },
    {
        id: "b680a0b6-1743-11ed-861d-0242ac120002",
    },
    {
        id: "b680a1e2-1743-11ed-861d-0242ac120002",
    },
    {
        id: "b680a2fa-1743-11ed-861d-0242ac120002",
    },
    {
        id: "b680a3fe-1743-11ed-861d-0242ac120002",
    },
    {
        id: "b680a7c8-1743-11ed-861d-0242ac120002",
    },
    {
        id: "b680a8ea-1743-11ed-861d-0242ac120002",
    },
    {
        id: "b680aa0c-1743-11ed-861d-0242ac120002",
    },
    {
        id: "b680ab2e-1743-11ed-861d-0242ac120002",
    },
];
const usersToAssign = [{ name: "user" }, { name: "user" }, { name: "user" }, { name: "user" }, { name: "user" }, { name: "user" }, { name: "user" }, { name: "user" }, { name: "user" }];
const listOfNames = ["sam", "john", "joe", "jacob", "rob", "mike", "matt", "dave", "paul"];
const formattedUsers = [];
const userVerification = () => {
    return true;
};
for (let i = 0; i < usersToAssign.length; i++) {
    const user = {
        id: userIds[i].id,
        name: listOfNames[i],
        dept: "Sales",
        createdAt: new Date(),
        updatedAt: new Date(),
        userVerification: userVerification(),
    };
    formattedUsers.push(user);
}
console.log(formattedUsers);
// 3 functions
// assign IDs to users
// replace all users with the name "user" to a random name generated
// format the user to send to DB
// userVerifcation func
// I should be able to pass the name of the user and the id, and it should match one of these id's and the name should match one of the names in your list
// const userVerication = (id, name) => {
//   // check if the name is the name list
//   // check if the id is in the id list
//   // if it passes all test, it returns true, else false
// };
