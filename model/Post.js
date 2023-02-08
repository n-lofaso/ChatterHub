const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Post extends Model {}

Post.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    user_id: {
      type: DataTypes.INTEGER,
      allownull: false,
      references: {
        model: "user",
        key: "id",
      },
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    interests_id: {
      type: DataTypes.STRING,
      allowNull: false,
      references: {
        model: "interests",
        key: "id",
      },
    },
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: "posts",
  }
);

module.exports = Post;
