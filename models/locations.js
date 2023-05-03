const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Locations extends Model {}

Locations.init({
    // add properites here, ex:
    id: {
         type: DataTypes.INTEGER,
         allowNull:false,
         unique:true,
         primaryKey: true,
         autoIncrement: true,
    },
    location_name:{
        type:DataTypes.STRING,
        allowNull:false,
        unique:true
    }
},{
    sequelize,
});

module.exports=Locations;