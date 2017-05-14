// Sequelize (capital) references the standard library
var Sequelize = require("sequelize");
// sequelize (lowercase) references my connection to the DB.
var sequelize = require("../config/connection.js");


// Makes the Plant Model (schema) available for other files (will also create a table)
module.exports = function(sequelize, DataTypes) {
  var Plant = sequelize.define("fruit_trees", {
    common_name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    cultivar: {
      type: DataTypes.STRING,
      allowNull: true
    },
  botanical_name: {
      type: DataTypes.STRING,
      allowNull: true
    },ripening_season: {
      type: DataTypes.STRING,
      allowNull: true
    },
    chill_min: {
      type: DataTypes.INTEGER,
      allowNull: true
    },chill_max: {
      type: DataTypes.INTEGER,
      allowNull: true
    },cold_hardiness: {
      type: DataTypes.INTEGER,
      allowNull: true
    },fruit: {
      type: DataTypes.STRING,
      allowNull: true
    },water_needs: {
      type: DataTypes.STRING,
      allowNull: true
    },sun: {
      type: DataTypes.STRING,
      allowNull: true
    },soil_type: {
      type: DataTypes.STRING,
      allowNull: true
    },ph_low: {
      type: DataTypes.INTEGER,
      allowNull: true
    },ph_high: {
      type: DataTypes.INTEGER,
      allowNull: true
    },fertilizer: {
      type: DataTypes.STRING,
      allowNull: true
    },originating_region: {
      type: DataTypes.STRING,
      allowNull: true
    },description: {
      type: DataTypes.STRING,
      allowNull: true
    },parentage: {
      type: DataTypes.STRING,
      allowNull: true
    }, {
  timestamps: false
  });
  return Plant;
};

// Syncs with DB
Plant.sync();


