"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Longboard extends Model {
    static associate(models) {
      // define association here
    }
  }
  Longboard.init(
    {
      name: DataTypes.STRING,
      brand: DataTypes.STRING,
      length: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Longboard",
    },
  );
  return Longboard;
};
