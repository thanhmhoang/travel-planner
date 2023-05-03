const express = require('express');
const router = express.Router();
const {Travelers, Locations, Trips} = require('../models');

router.get("/", (req, res) => {
    Travelers.findAll({
      include:[Locations, Trips]
    })
      .then((zoos) => {
        res.json(zoos);
      })
      .catch((err) => {
        console.log(err);
        res.status(500).json({ msg: "error occurred", err });
      });
  });