"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class reviewers extends Model {
    static associate(models) {
      models.Restaurants.hasMany(models.Reviews);
    }
  }
  reviewers.init(
    {
      name: DataTypes.STRING,
      email: DataTypes.STRING,
      karma: DataTypes.NUMBER,
    },
    {
      sequelize,
      modelName: "reviewers",
    },
  );
  return reviewers;
};
