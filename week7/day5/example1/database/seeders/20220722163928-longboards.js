"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Longboards",
      [
        {
          name: "Dime Board",
          brand: "Magneto",
          length: "22 in",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Longboard",
          brand: "Boosted",
          length: "40 in",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {},
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Longboards", null, {});
  },
};
