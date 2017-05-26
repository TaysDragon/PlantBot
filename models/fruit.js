/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  var fruit = sequelize.define('fruit', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    common_name: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    cultivar: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    botanical_name: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    ripening_season: {
      type: DataTypes.STRING(4000),
      allowNull: true
    },
    chill_min: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    chill_max: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    cold_hardiness: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    fruit: {
      type: DataTypes.STRING(4000),
      allowNull: true
    },
    water_needs: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    sun: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    soil_type: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    ph_low: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    ph_high: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    fertilizer: {
      type: DataTypes.STRING(4000),
      allowNull: true
    },
    originating_region: {
      type: DataTypes.STRING(4000),
      allowNull: true
    },
    description: {
      type: DataTypes.STRING(4000),
      allowNull: true
    },
    parentage: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    ordered: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    arrived: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    price: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    comment: {
      type: DataTypes.STRING(4000),
      allowNull: true
    }
  }

  , {
    tableName: 'fruit',
    underscored: true,
    timestamps: false
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });

  return fruit;
};
