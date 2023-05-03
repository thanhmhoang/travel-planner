const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Travelers extends Model {}

Travelers.init({
    // add properites here, ex:
    id: {
         type: DataTypes.INTEGER,
         allowNull:false,
         unique:true,
         primaryKey: true,
         autoIncrement: true,
    },
    name:{
        type:DataTypes.STRING,
        allowNull:false,
    },
    email:{
        type:DataTypes.STRING,
        allowNull:false,
        unique: true,
        validate: {
            isEmail: true,
          },
    }
},{
    sequelize,
});

module.exports=Travelers;