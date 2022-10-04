const {  DataTypes, Model } = require('sequelize');
const db = require('../config/DBconnection');
sequelize = db.sequelize,
Sequelize = db.Sequelize;

const User = sequelize.define('User', {
  // Model attributes are defined here
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  email: {
    type: DataTypes.STRING
    // allowNull defaults to true
  }
}, {
  tableName: "user"
  // Other model options go here
});
module.exports = User;


/*
const { Model, DataTypes } = require("sequelize")
const { sequelize } = require('../services')
const { chatMembers } = require("./chatMembers")

class chat extends Model {}

chat.init({
    name: {
        type: DataTypes.STRING
    }, 
    isGroup: {
        type: DataTypes.BOOLEAN
    }, 
    archived: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
    }, 
}, {
    sequelize
})


module.exports = {
    chat,
}
*/