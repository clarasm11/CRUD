const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('CRUD', 'root', 'Claraeu@11', {
  host: 'localhost',
  dialect: 'mysql',
  logging: false
});

module.exports = sequelize;
