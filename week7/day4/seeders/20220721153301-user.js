"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
    await queryInterface.bulkInsert("Users", [
      {
        firstName: "West",
        lastName: "McMillen",
        email: "westmcmillen@gmail.com",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        firstName: "Madison",
        lastName: "McMillen",
        email: "madison.s.mcmillen@gmail.com",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        firstName: "Parker",
        lastName: "McMillen",
        email: "parkermcmillen@gmail.com",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete("Users", null, {});
  },
};
