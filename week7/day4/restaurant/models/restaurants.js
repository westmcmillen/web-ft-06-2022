"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class restaurants extends Model {
    static associate(models) {
      models.Restaurants.hasMany(models.Reviews);
      models.Restaurants.hasMany(models.Reviewers);
    }
  }
  restaurants.init(
    {
      name: DataTypes.STRING,
      address: DataTypes.STRING,
      category: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "restaurants",
    },
  );
  return restaurants;
};
