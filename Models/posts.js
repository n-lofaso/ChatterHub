const { Model, DataTypes} = require('sequelize');
const sequelize = require('../config/connection');

class Post extends Model {}

Post.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        Title: {
            type: DataTypes.STRING,
            allowNull: false
        },
        user_id: {
            type: DataTypes.INTEGER,
            allownull: false,
            references: {
                model: 'user',
                key: 'id'
            }
        },
        Description: {
            type: DataTypes.TEXT,
            allowNull: true
        },
        Likes: {
            type: DataTypes.INTEGER,
            allowwNull: true
        }
    },
    {
        sequelize,
        freezeTableName: true,
        underscored: true,
        modelName: 'posts'
    }
);

module.exports = Post;