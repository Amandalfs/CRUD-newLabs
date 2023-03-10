const Sequelize = require('sequelize');
const database = require('./db');

const produto = database.define('produto', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    price: {
        type: Sequelize.FLOAT
    },
    qtd: {
        type: Sequelize.INTEGER
    },
    descont: {
        type: Sequelize.BOOLEAN
    },
    descricao: Sequelize.STRING
});

module.exports = produto;