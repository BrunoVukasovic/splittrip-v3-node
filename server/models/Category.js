const Sequelize = require("sequelize");
const sequelize = require("../database");
const Trip = require("./Trip");

const Category = sequelize.define("Category", {
  Id: {
    type: Sequelize.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true
  },
  CategoryName: {
    type: Sequelize.STRING,
    allowNull: false
  },
  createdAt: {
    type: Sequelize.DATE,
    field: "CreatedAt"
  },
  updatedAt: {
    type: Sequelize.DATE,
    field: "UpdatedAt"
  }
});

Category.hasMany(Trip, { as: "Trips", foreignKey: "CategoryID" });

module.exports = Category;
