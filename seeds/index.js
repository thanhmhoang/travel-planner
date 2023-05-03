const sequelize = require("../config/connection");

const {Travelers,Locations,Trips} = require("../models")

const travelers = [
    {
        name:"Thanh Hoang",
        email:"thanh.hoang210@gmail.com"
    },
    {
        name:"Brent Houston",
        email:"brenthouston@gmail.com"
    },
    {
        name:"Veronica Griggs",
        email:"veronicagriggs@gmail.com"
    },
    {
        name:"Cody Touchette",
        email:"codytouchette@gmail.com"
    },
]

const locations = [
    {
        location_name:"Singapore",
    },
    {
        location_name:"Madrid",
    },
    {
        location_name:"Tokyo",
    },
    {
        location_name:"Dubai",
    },
]

const trips = [
    {
        trip_budget:5000,
        traveler_amount:2,
        traveler_id:1,
        location_id:1,
    },
    {
        trip_budget:10000,
        traveler_amount:4,
        traveler_id:2,
        location_id:2,
    },
    {
        trip_budget:8000,
        traveler_amount:3,
        traveler_id:3,
        location_id:3,
    },
    {
        trip_budget:20000,
        traveler_amount:2,
        traveler_id:4,
        location_id:4,
    },
]

const startSeedin = async ()=>{
    try{
        await sequelize.sync({force:true});
        const travelerData = await Travelers.bulkCreate(travelers);
        const locationData = await Locations.bulkCreate(locations);
        const tripData = await Trips.bulkCreate(trips);
        console.log("all done!")
        process.exit(0);
    } catch (err){
        console.log(err)
    }
}

startSeedin()