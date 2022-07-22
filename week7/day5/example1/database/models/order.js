"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Order extends Model {
    static associate(models) {
      Order.belongsTo(models.User, {
        foreignKey: "id",
        as: "user",
      });
      Order.belongsTo(models.Longboard, {
        foreignKey: "id",
        as: "longboard",
      });
    }
  }
  Order.init(
    {
      userId: DataTypes.STRING,
      longboardId: DataTypes.STRING,
      price: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Order",
    },
  );
  return Order;
};
