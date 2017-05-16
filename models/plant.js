
// var Sequelize = require('sequelize');


module.exports = function(sequelize, DataTypes) {
  var Plant = sequelize.define("Plant", {
    
  common_name: {
      type: DataTypes.STRING
      
    }
  //   ,
  //   cultivar: {
  //     type: Sequelize.STRING
  //   },
  // botanical_name: {
  //     type: Sequelize.STRING
      
  //   },
  //   ripening_season: {
  //     type: Sequelize.STRING
      
  //   },
  //   chill_min: {
  //     type: Sequelize.INTEGER
      
  //   },
  //   chill_max: {
  //     type: Sequelize.INTEGER
      
  //   },
  //   cold_hardiness: {
  //     type: Sequelize.INTEGER
      
  //   },
  //   fruit: {
  //     type: Sequelize.STRING
     
  //   },
  //   water_needs: {
  //     type: Sequelize.STRING
      
  //   },
  //   soil_type: {
  //     type: Sequelize.STRING
      
  //   },
  //   ph_low: {
  //     type: Sequelize.INTEGER
      
  //   },
  //   ph_high: {
  //     type: Sequelize.INTEGER
      
  //   },
  //   fertilizer: {
  //     type: Sequelize.STRING
      
  //   },
  //   originating_region: {
  //     type: Sequelize.STRING
      
  //   },
  //   description: {
  //     type: Sequelize.STRING
      
  //   },
  //   parentage: {
  //     type: Sequelize.STRING
      
  //   }
    
  });
return Plant;

};
// module.exports = Plant;
