const { DataTypes } = require("sequelize");
const db = require("../db");

const Comments = db.define("comments", {
  id: {
    type: DataTypes.UUID,
    primaryKey: true,
    defaultValue: DataTypes.UUIDV4,
    allowNull: false,
  },
  content: {
    type: DataTypes.TEXT,
    required: true,
  }
});

module.exports = Comments;