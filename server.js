
const express = require('express');
const routes = require('./routes');
const sequelize = require('./config/connection')

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(routes);

// sync sequelize models to the database, then turn on the server
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log('----------------Now listening------------------------'));
});

// 1 Cup of Chemex Coffee
// Tool: Chemex, 
// Cups: 1 cup
// Grind Size: Medium, 
// Bean Ratio: 20g
// Water: 300g

// Models: Tool/Cup
// Tool has many cup sizes