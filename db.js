const Sequelize = require('sequelize');
const sequelize = new Sequelize('postgres://hptbrjiw:***@kandula.db.elephantsql.com/hptbrjiw',  {dialect: 'postgres'})

module.exports = sequelize;