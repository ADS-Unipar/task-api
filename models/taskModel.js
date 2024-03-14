const { DataTypes } = require('sequelize');
const db = require('../infrastructure/db');

module.exports = db.define('task', {
    title: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    status: {
        type: DataTypes.ENUM,
        values: ['COMPLETED','ACTIVE'],
        allowNull:false,
        defaultValue: 'ACTIVE'
    }
});