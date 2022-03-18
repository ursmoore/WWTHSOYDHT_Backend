"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class location extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      location.hasMany(models.comment);
      location.belongsTo(models.user);
      // define association here
    }
  }
  location.init(
    {
      name: DataTypes.STRING,
      image: DataTypes.STRING,
      dislikes: DataTypes.INTEGER,
      description: DataTypes.TEXT,
      latitude: DataTypes.DECIMAL,
      longtitude: DataTypes.DECIMAL,
      experience: DataTypes.TEXT,
    },
    {
      sequelize,
      modelName: "location",
    }
  );
  return location;
};
