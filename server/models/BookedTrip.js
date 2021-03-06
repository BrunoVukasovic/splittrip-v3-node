const Sequelize = require("sequelize");
const sequelize = require("../database");
const Review = require("../models/Review");
const Trip = require("../models/Trip");

const BookedTrip = sequelize.define("BookedTrip", {
  Id: {
    type: Sequelize.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true
  },
  Date: {
    type: Sequelize.DATE
  },
  NumberOfPeople: {
    type: Sequelize.INTEGER
  },
  Canceled: {
    type: Sequelize.BOOLEAN
  },
  Past: {
    type: Sequelize.BOOLEAN
  },
  Reviewed: {
    type: Sequelize.BOOLEAN
  },
  createdAt: {
    type: Sequelize.DATE,
    field: "CreatedAt"
  },
  updatedAt: {
    type: Sequelize.DATE,
    field: "UpdatedAt"
  },
  TripID: {
    type: Sequelize.INTEGER,
    references: {
      model: "Trips", // refers to table name
      key: "Id" // refers to column name in table
    }
  },
  UserID: {
    type: Sequelize.INTEGER,
    allowNull: true,
    references: {
      model: "Users", // refers to table name
      key: "Id" // refers to column name in table
    }
  }
});

BookedTrip.belongsTo(Trip, { foreignKey: "TripID" });
BookedTrip.hasOne(Review, { foreignKey: "BookedTripID" });
module.exports = BookedTrip;
