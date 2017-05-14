// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================

// Requiring our models
var db = require("../models");

// Routes
// =============================================================
module.exports = function(app) {

  // Get all plants
  app.get("/api/all", function(req, res) {

    Plant.findAll({}).then(function(results) {
      res.json(results);
    });

  });

 // Get all plants of a specific genus
  app.get("/api/commonName/:commonName", function(req, res) {

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



  };