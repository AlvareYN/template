//sequalize model for user
const { DataTypes, Model } = require('sequelize');
const sequelize = require('../config/database');

class User extends Model { }

User.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    fullName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    age: {
        type: DataTypes.STRING
        // allowNull defaults to true
    },
    birthDate: {
        type: DataTypes.DATE,
        allowNull: false
    },
    // Other model options go here
    sequelize, // We need to pass the connection instance
    modelName: 'User' // We need to choose the model name
});

module.exports = User;

