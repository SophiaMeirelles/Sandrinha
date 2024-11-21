const sequelize = require("./config/config");
const User = require("./models/User");


sequelize
  .sync({ force: true })
  .then(() => {
    console.log("Banco de dados sincronizado.");
  })
  .catch((error) => {
    console.error("Erro ao sincronizar banco de dados:", error);
  });