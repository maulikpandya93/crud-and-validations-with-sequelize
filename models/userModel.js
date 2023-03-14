const {DataTypes} = require('sequelize');
const sequelize = require("../connection/db_connect");
const User = sequelize.define('User', {
    email : {
        type : DataTypes.STRING,
        allowNull : false
    },
    password : {
        type : DataTypes.STRING,
        allowNull : false
    }
},{
    createdAt : 'LoginTime',
    updatedAt : false
})

User.sync({force : false})


module.exports = User;