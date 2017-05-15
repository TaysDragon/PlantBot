
var Sequelize = require('sequelize');


// module.exports = function(sequelize, DataTypes) {
var Plant = sequelize.define("fruit_trees", {
    common_name: {
      type: Sequelize.STRING,
      allowNull: false
    },
    cultivar: {
      type: Sequelize.STRING,
      allowNull: true
    },
  botanical_name: {
      type: Sequelize.STRING,
      allowNull: true
    },ripening_season: {
      type: Sequelize.STRING,
      allowNull: true
    },
    chill_min: {
      type: Sequelize.INTEGER,
      allowNull: true
    },chill_max: {
      type: Sequelize.INTEGER,
      allowNull: true
    },cold_hardiness: {
      type: Sequelize.INTEGER,
      allowNull: true
    },fruit: {
      type: Sequelize.STRING,
      allowNull: true
    },water_needs: {
      type: Sequelize.STRING,
      allowNull: true
    },sun: {
      type: Sequelize.STRING,
      allowNull: true
    },soil_type: {
      type: Sequelize.STRING,
      allowNull: true
    },ph_low: {
      type: Sequelize.INTEGER,
      allowNull: true
    },ph_high: {
      type: Sequelize.INTEGER,
      allowNull: true
    },fertilizer: {
      type: Sequelize.STRING,
      allowNull: true
    },originating_region: {
      type: Sequelize.STRING,
      allowNull: true
    },description: {
      type: Sequelize.STRING,
      allowNull: true
    },parentage: {
      type: Sequelize.STRING,
      allowNull: true
    }
  });

return Plant;
// };
module.exports = Plant;
