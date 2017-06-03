// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================
var db = require("../models");
// var db1 = require("../models/fruit.js");


// Routes
// =============================================================
module.exports = function(app) {

    // Get all plants
    app.get("/api/all", function(req, res) {

        db.fruit.findAll({}).then(function(results) {
            res.json(results);
        });

    });

    // Get all plants of a specific common name
    app.get("/api/:commonName", function(req, res) {

        if (req.params.commonName) {
            db.fruit.findAll({
                where: {
                    common_name: req.params.commonName
                }
            }).then(function(results) {
                res.json(results);
            });
        }

    });

    // Get all plants of a specific botanical name
    app.get("/api/:BotanicalName", function(req, res) {

        if (req.params.BotanicalName) {
            db.fruit.findAll({
                where: {
                    botanical_name: req.params.BotanicalName
                }
            }).then(function(results) {
                res.json(results);
            });
        }

    });

    // Get all plants of a specific cultivar
    app.get("/api/:cultivar", function(req, res) {

        if (req.params.cultivar) {
            db.fruit.findAll({
                where: {
                    cultivar: req.params.cultivar
                }
            }).then(function(results) {
                res.json(results);
            });
        }

    });

    // Get all plants of specific watering requirement
    app.get("/api/:water", function(req, res) {

        if (req.params.water) {
            db.fruit.findAll({
                where: {
                    water_needs: req.params.water
                }
            }).then(function(results) {
                res.json(results);
            });
        }

    });

    // Get all plants of a specific sun or shade preference
    app.get("/api/:sun", function(req, res) {

        if (req.params.sun) {
            db.fruit.findAll({
                where: {
                    common_name: req.params.sun
                }
            }).then(function(results) {
                res.json(results);
            });
        }

    });

    // Get all plants of a specific botanical name
    app.get("/api/:soil", function(req, res) {

        if (req.params.Soil) {
            db.fruit.findAll({
                where: {
                    soil_type: req.params.Soil
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
        fruit.create({
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
        fruit.destroy({
            where: {
                tree_id: req.body.tree_id
            }
        });

    });

};
