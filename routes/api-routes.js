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
  app.get("/api/genre/:genre", function(req, res) {

    if (req.params.genre) {
      Book.findAll({
        where: {
          genre: req.params.genre
        }
      }).then(function(results) {
        res.json(results);
      });
    }

  });



  };