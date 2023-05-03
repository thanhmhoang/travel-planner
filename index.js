const express = require('express');
const sequelize = require("./config/connection")

const app = express();
const PORT = process.env.PORT ||3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


const allRoutes = require("./controllers")

app.use(allRoutes)

// turn on connection to db and server
sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => console.log('Now listening'));
  });