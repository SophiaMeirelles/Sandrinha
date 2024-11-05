const { Sequelize } = require("sequelize");

const sequelize = new Sequelize({
  dialect: "sqlite",
  storage: "./config/bd.sqlite",
});

module.exports = sequelize;