const Sequelize = require("sequelize");
const sequelize = new Sequelize({
  dialect: "sqlite",
  storage: "./database/BD.sqlite",
});

module.exports = sequelize;
