// Import the schema to create functions that will interact with the database.

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
    }
  });
  return Plant;
};
