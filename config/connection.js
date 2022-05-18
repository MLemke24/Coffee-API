const sequelize = require('sequelize');

const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PW, {
    host: 'localhost',
    dialect: 'mysql',
    port: 3306
  });

// Models: Brewing Methods: Grind Type    Cups: 2 cups ground amount, water amount, 420g volume of water

// Method has many cups, one grind size, many pour
  
  module.exports = sequelize;