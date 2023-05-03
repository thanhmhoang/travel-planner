const express = require('express');
const router = express.Router();

const travelerRoutes = require("./travelersController");
const locationRoutes = require("./locationsController");
const tripRoutes = require("./tripsController");

router.get("/",(req,res)=>{
    res.send("this is the homepage!")
})

router.use("/api/travelers",travelerRoutes)
router.use("/api/locations",locationRoutes)
router.use("/api/trips",tripRoutes)

module.exports = router;