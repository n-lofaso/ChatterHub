const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Interests extends Model {}

Interests.init(
    {
        id: {
            type: DataTypes.STRING,
            allowNull: false,
            primaryKey: true,
            unique: true,
            collate: 'utf8_general_ci',
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        description: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'interests',
    }
);

module.exports = Interests;