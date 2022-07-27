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
    await queryInterface.bulkInsert(
      "Pets",
      [
        {
          name: "Kona",
          species: "Dog",
          age: 4,
          weight: "70",
          health: "Good",
          unitOfWeight: "Pounds",
          owner: "West McMillen",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Kailua",
          species: "Dog",
          age: 3,
          weight: "100",
          health: "Good",
          unitOfWeight: "Pounds",
          owner: "West McMillen",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Meli",
          species: "Chicken",
          age: 1,
          weight: "5",
          health: "Good",
          unitOfWeight: "Pounds",
          owner: "West McMillen",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Moa",
          species: "Chicken",
          age: 1,
          weight: "5",
          health: "Good",
          unitOfWeight: "Pounds",
          owner: "West McMillen",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Mai",
          species: "Chicken",
          age: 1,
          weight: "5",
          health: "Good",
          unitOfWeight: "Pounds",
          owner: "West McMillen",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {},
    );
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */

    await queryInterface.bulkDelete("Pets", null, {});
  },
};
