"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class reviews extends Model {
    static associate(models) {
      models.Reviews.hasOne(models.Restaurants);
      models.Reviews.hasOne(models.Reviewers);
    }
  }
  reviews.init(
    {
      reviewerId: DataTypes.NUMBER,
      stars: DataTypes.NUMBER,
      title: DataTypes.STRING,
      review: DataTypes.STRING,
      restaurantId: DataTypes.NUMBER,
    },
    {
      sequelize,
      modelName: "reviews",
    },
  );
  return reviews;
};
