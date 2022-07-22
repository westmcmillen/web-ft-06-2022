"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Users",
      [
        {
          firstName: "West",
          lastName: "McMillen",
          email: "westmcmillen@gmail.com",
          password: "123",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          firstName: "Madison",
          lastName: "McMillen",
          email: "madison.s.mcmillen@gmail.com",
          password: "123",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          firstName: "Parker",
          lastName: "McMillen",
          email: "parkermcmillen@gmail.com",
          password: "123",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {},
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Users", null, {});
  },
};
