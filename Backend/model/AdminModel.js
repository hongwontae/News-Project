const DB = require('../util/DB');
const {DataTypes} = require('sequelize');

const AdminModel = DB.define('admin', {
    admin_id : {
        type : DataTypes.INTEGER,
        allowNull : false,
        autoIncrement : true,
        primaryKey : true
    },
    email : {
        type : DataTypes.STRING,
        allowNull : false
    },
    password : {
        type : DataTypes.STRING,
        allowNull : false
    }
})

module.exports = AdminModel;