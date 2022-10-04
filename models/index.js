const DBconfig = require('../config/DBconnection.js');

const { Sequelize, DataTypes} = require('sequelize');
const { DB } = require('../config/DBconnection.js');

const sequelize = new Sequelize(
    DBconfig.DB,
    DBconfig.USER,
    DBconfig.PASSWORD,{
        host: DBconfig.HOST,
        dialect: DBconfig.dialect,
        operatorsAliases : false,
        pool : {
            max :DBconfig.pool.max,
            min :DBconfig.pool.min,
            acquire :DBconfig.pool.acquire,
            idle :DBconfig.pool.idle,
        }
    }
)

sequelize.authenticate()
.then(()=>{
    console.log("connected to db...! ");
})
.catch(err=>{
    console.log(err);
})

const db = {};

db.sequelize = sequelize;
db.Sequelize = Sequelize;

db.products = require('./productModel.js')(sequelize, DataTypes)
db.reviews = require('./reviewModel.js')(sequelize, DataTypes)

db.sequelize.sync({force:false})
.then(()=>{
    console.log("re-sync is done|")
})

module.exports = db;