"use strict";
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Pets", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      name: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      species: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      age: {
        type: Sequelize.STRING,
      },
      weight: {
        type: Sequelize.STRING,
      },
      health: {
        type: Sequelize.STRING,
      },
      unitOfWeight: {
        type: Sequelize.STRING,
      },
      owner: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("Pets");
  },
};
