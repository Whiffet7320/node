const { Sequelize } = require('sequelize')
const sequelize = new Sequelize('myschool', 'root', 'password', {
  host: 'localhost',
  dialect: 'mysql'
});

module.exports = sequelize