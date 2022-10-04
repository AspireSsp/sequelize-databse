module.exports = {
  HOST: 'localhost',
  USER: 'postgres',
  PASSWORD: 'sanjay',
  DB: 'postgres',
  dialect: 'postgres',
  pool:{
    max:5,
    min:0,
    acquire: 30000,
    idle: 10000,
  }
}













// const { Sequelize, DataTypes } = require('sequelize');

// const sequelize = new Sequelize('postgres://postgres:sanjay@example.com:5432/postgres') 

//     sequelize.authenticate()
//     console.log('Connection has been established successfully.');
        
        
  

// const db = {};
// db.Sequelize = Sequelize;
// db.sequelize = sequelize;
// module.exports = db;
// module.exports = {
//     sequelize,
//     DBconnection
// }







// module.exports = sequelize

// const User = sequelize.define('User', {
//     // Model attributes are defined here
//     firstName: {
//       type: DataTypes.STRING,
//       allowNull: false
//     },
//     lastName: {
//       type: DataTypes.STRING
//       // allowNull defaults to true
//     }
//   }, {
//     // Other model options go here
//   });
  
//   // `sequelize.define` also returns the model
//   console.log(User === sequelize.models.User);