// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================
var db = require("../models");
//var db1 = require("../models/plant.js");
// var Sequelize = require('sequelize');

// Routes
// =============================================================
module.exports = function(app) {

  // Get all plants
  app.get("/api/all", function(req, res) {

    db.Plant.findAll({}).then(function(results) {
      res.json(results);
    });

  });

  // Get all plants of a specific common name
  app.get("/api/:commonName", function(req, res) {

    if (req.params.commonName) {
      Plant.findAll({
        where: {
          common_name: req.params.commonName
        }
      }).then(function(results) {
        res.json(results);
      });
    }

  });

  
  // Add a plant
  app.post("/api/new", function(req, res) {

    console.log("Plant Data:");
    console.log(req.body);
    Plant.create({
      common_name: req.body.commonName,
      cultivar: req.body.cultivar,
      botanical_name: req.body.botanicalName,
      ripening_season: req.body.ripe,
      chill_min: req.body.chillMin,
      chill_max: req.body.chillMax,
      cold_hardiness: req.body.cold,
      fruit: req.body.fruit,
      water_needs: req.body.water,
      sun: req.body.sun,
      soil_type: req.body.soil,
      ph_low: req.body.phLow,
      ph_high: req.body.phHigh,
      fertilizer: req.body.fertilizer,
      originating_region: req.body.origin,
      description: req.body.description,
      parentage: req.body.parentage
    });

  });

  // Delete a plant
  app.post("/api/delete", function(req, res) {

    console.log("Plant Data:");
    console.log(req.body);
    Plant.destroy({
      where: {
        tree_id: req.body.tree_id
      }
    });

  });

};


